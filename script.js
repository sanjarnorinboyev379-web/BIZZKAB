body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #b30000;
  color: #ffd700;
}

header {
  text-align: center;
  padding: 15px;
  border-bottom: 2px solid #ffd700;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}

.tabs button {
  background: #ffd700;
  color: #b30000;
  border: none;
  padding: 8px 15px;
  border-radius: 8px;
  font-weight: bold;
}

.menu {
  padding: 15px;
}

.item {
  background: #8b0000;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item h3 {
  margin: 0;
}

.item span {
  font-weight: bold;
}

.item button {
  background: #ffd700;
  color: #b30000;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 22px;
  cursor: pointer;
}

.cart {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #ffd700;
  color: #b30000;
  padding: 12px;
  text-align: center;
  font-weight: bold;
}
