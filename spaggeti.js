
let users = ["Juan", "María", "Pedro", "Ana"];
let ages = [25, 30, 35, 28];
let activeUsers = [];
let data = [];

for (let i = 0; i < users.length; i++) {
  if (ages[i] > 20) {
    if (users[i][0] === "J" || users[i][0] === "P") {
      activeUsers.push(users[i]);
    }
    for (let j = 0; j < ages.length; j++) {
      if (ages[j] > 25) {
        data.push({ name: users[j], age: ages[j] });
      }
    }
  }
}

for (let i = 0; i < data.length; i++) {
  if (data[i].age < 30) {
    console.log(data[i].name + " tiene " + data[i].age + " años");
  }
}

for (let i = 0; i < activeUsers.length; i++) {
  console.log("Usuario activo: " + activeUsers[i]);
}

for (let i = 0; i < users.length; i++) {
  for (let j = 0; j < activeUsers.length; j++) {
    if (users[i] === activeUsers[j]) {
      console.log(users[i] + " ya está activo.");
    }
  }
}
// Función para filtrar usuarios activos
function getActiveUsers(users, ages) {
    return users.filter((user, index) => ages[index] > 20 && (user.startsWith("J") || user.startsWith("P")));
  }
  
  // Función para obtener datos de usuarios mayores de 25 años
  function getUsersAboveAge(users, ages, ageLimit) {
    return users
      .map((user, index) => ({ name: user, age: ages[index] }))
      .filter(user => user.age > ageLimit);
  }
  
  // Función para imprimir información de usuarios
  function printUserInfo(users) {
    users.forEach(user => {
      if (user.age < 30) {
        console.log(`${user.name} tiene ${user.age} años`);
      }
    });
  }
  
  // Función para verificar usuarios activos
  function printActiveUsers(users, activeUsers) {
    activeUsers.forEach(activeUser => {
      if (users.includes(activeUser)) {
        console.log(`${activeUser} ya está activo.`);
      }
    });
  }
  
  // Datos
  let users = ["Juan", "María", "Pedro", "Ana"];
  let ages = [25, 30, 35, 28];
  
  // Procesamiento
  const activeUsers = getActiveUsers(users, ages);
  const userData = getUsersAboveAge(users, ages, 25);
  
  // Resultados
  printUserInfo(userData);
  printActiveUsers(users, activeUsers);
  