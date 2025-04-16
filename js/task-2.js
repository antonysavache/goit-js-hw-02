function formatMessage(message, maxLength) {
  // Проверяем длину сообщения
  if (message.length <= maxLength) {
    // Если длина не превышает максимальную, возвращаем исходное сообщение
    return message;
  } else {
    // Если длина превышает максимальную, обрезаем и добавляем "..."
    return message.slice(0, maxLength) + "...";
  }
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"