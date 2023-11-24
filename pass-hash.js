const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin1.2.3'
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword(); // $2b$10$GiP.RKuC7tdx8pIoWMRkZuyCwbQYs8aBhJLaqwwqa6bJ1LET.Msom
