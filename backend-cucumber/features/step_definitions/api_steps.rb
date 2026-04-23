Given ('que faço uma requisição GET na API VR') do
    @response = HTTParty.get('https://portal.vr.com.br/api-web/comum/enumerations/VRPAT')
end

Then ('o status da resposta deve ser 200') do
    expect (@response.code).to eq(200)
end

Then('o JSON deve conter a chave {string}') do |key|
    expect (@response.parsed_response).to have_key(key)
end

Then('imprimo um tipo de estabelecimento aleatório') do
  lista = @response.parsed_response["typeOfEstablishment"]
  puts "Tipo aleatório: #{lista.sample}"
en
d