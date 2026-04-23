def remover_texto(str, marcadores)
  index = marcadores.map { |m| str.index(m) }.compact.min
  index ? str[0...index].strip : str
end

Given('a string {string}') do |string|
  @string = string
end

Given('os marcadores {string}') do |marcadores|
  @marcadores = marcadores.split
end

Then('o resultado deve ser {string}') do |esperado|
  resultado = remover_texto(@string, @marcadores)
  expect(resultado).to eq(esperado)
end