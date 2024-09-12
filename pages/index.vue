<script setup>
import { ref } from 'vue';

const isLogin = ref(true);
const email = ref('');
const password = ref('');
const error = ref('');

const toggleAuth = () => {
  isLogin.value = !isLogin.value;
  error.value = ''; // Сброс ошибки при переключении
};

const handleSubmit = async () => {
  error.value = ''; // Сброс предыдущей ошибки
  try {
    if (isLogin.value) {
      await login();
    } else {
      await register();
    }
  } catch (err) {
    error.value = err.message || 'Произошла ошибка. Пожалуйста, попробуйте еще раз.';
  }
};

const login = async () => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ошибка входа');
  }

  const data = await response.json();
  console.log('Успешный вход:', data);
  // Здесь можете сохранить токен или редиректить пользователя
};

const register = async () => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ошибка регистрации');
  }

  const data = await response.json();
  console.log('Успешная регистрация:', data);
  // Здесь можно автоматически входить пользователя или редиректить на страницу входа
};
</script>

<template>
  <div class="auth-container">
    <h1>{{ isLogin ? 'Авторизация' : 'Регистрация' }}</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Пароль</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">{{ isLogin ? 'Войти' : 'Зарегистрироваться' }}</button>
      <p @click="toggleAuth">{{ isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите' }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.auth-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
}

p {
  color: #007bff;
  cursor: pointer;
  text-align: center;
}

.error {
  color: red;
  text-align: center;
}
</style>