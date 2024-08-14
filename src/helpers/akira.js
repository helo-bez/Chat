var step0 = {
  //step 0
  message: ['Olá. Você entrou em contato com o suporte do Akira. Atualmente estamos preparando a lista de dados que retiramos da sua rede. Por enquanto você tem que saber que negociar conosco é a melhor maneira possível de resolver isso de forma rápida e barata. Mantenha contato e seja paciente conosco. Entraremos em contato com você em breve. Você tem permissão para conduzir uma negociação em nome de sua organização?'],
  options: {
    // 1
    'Ok, tenho permissão para negociar, mas não tenho permissão para definir valores.': step1,
    // 2
    'Vai se ferrar %&*#@#, não vou negociar com vocês nunca.': step2
  }
}
var step2 = {
  //step 2
  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede. '],
  success: false,
  options: {
  }
}

var step1 = {
  //step 1
  message: ['Esses arquivos foram retirados da sua rede antes da criptografia. Você pode escolher de 2 a 3 arquivos aleatórios da lista e nós os enviaremos como prova de posse. Para provar que podemos descriptografar seus dados corretamente, você pode enviar de 2 a 3 arquivos criptografados para o nosso bate-papo e nós enviaremos cópias descriptografadas de volta.'],
  options: {
    // 1.1
    'Me mande os sequintes arquivos: Arquivo1.txt, Arquivo2.txt e Arquivo3.txt. Também estou mandando três arquivos criptografados.': step1_1_first,
    // 1.2
    'Não responder.': step1_2
  }
}
var step1_2 = {
  message: ['Informe-nos se você está interessado em manter o incidente confidencial. Seu silêncio será avaliado como uma resposta negativa.'],
  options: {
    //1.2.1
    'Não responder.': step1_2_1,
    //1.1
    'Ok, me mande os sequintes arquivos: Arquivo1.txt, Arquivo2.txt e Arquivo3.txt. Também estou mandando três arquivos criptografados.': step1_1_first
  }
}
var step1_1_first = {
  //step 1.1.first
  message: ['Aqui estão os arquivos, enquanto isso, apresentaremos uma demanda justa para você.', 'Então, examinamos seus arquivos para definir suas capacidades financeiras. Estivemos analisando seus extratos bancários, lucro líquido, limites de responsabilidade cibernética, auditorias financeiras - todas as informações que podem nos ajudar a calcular nossa demanda para você. Estamos dispostos a definir um preço de US$ 165.000 para TODOS os serviços que oferecemos: 1) assistência completa para descriptografia; 2) evidências de remoção de dados; 3) relatório de segurança sobre vulnerabilidades encontradas; 4) garantias de não publicar ou vender seus dados; 5) garantia de não atacar você no futuro. Deixe-me saber se você está interessado em um negócio completo ou em partes. Isso afetará o preço final.',],
  options: {
    //1.1.1
    'Vamos querer todos os serviços, podemos efetuar o pagamento imediatamente se você fornecer uma carteira BTC.': step1_1_1,
    //1.1.2
    'Você está disposto a negociar um preço mais baixo?': step1_1_2,
    //1.2.1
    'Não responder.': step1_2_1,
  }
}
var step1_1_second = {
  //step 1.1.second
  message: ['Não iremos mais nos repetir', 'Já examinamos seus arquivos para definir suas capacidades financeiras. Estivemos analisando seus extratos bancários, lucro líquido, limites de responsabilidade cibernética, auditorias financeiras - todas as informações que podem nos ajudar a calcular nossa demanda para você. Estamos dispostos a definir um preço de US$ 165.000 para TODOS os serviços que oferecemos: 1) assistência completa para descriptografia; 2) evidências de remoção de dados; 3) relatório de segurança sobre vulnerabilidades encontradas; 4) garantias de não publicar ou vender seus dados; 5) garantia de não atacar você no futuro. Deixe-me saber se você está interessado em um negócio completo ou em partes. Isso afetará o preço final.',],
  options: {
    //1.1.1
    'Vamos querer todos os serviços, podemos efetuar o pagamento imediatamente se você fornecer uma carteira BTC.': step1_1_1,
    //1.1.2
    'Você está disposto a negociar um preço mais baixo?': step1_1_2,
  }
}
var step1_1_1 = {
  //step 1.1.1
  message: ['Aqui está [Bitcoin Wallet].', 'Pagamento recebido.', 'Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
  success: true,
  options: {
  }
}

var step1_1_2 = {
  //step 1.1.2
  message: ['Depende do valor que você pode nos oferecer no momento.'],
  options: {
    //1.1.2.1
    'Podemos oferecer 5 mil agora, nossa última oferta.': step1_1_2_1,
    //1.1.2.2
    'Agradecemos sua disposição em trabalhar conosco, podemos oferecer US$ 59 mil. Se você concordar, podemos efetuar o pagamento imediatamente assim que você fornecer uma carteira BTC.': step1_1_2_2
  }
}
var step1_2_1 = {
  //step 1.2.1
  message: ['Olá. Deixe-nos saber se você está interessado neste negócio. Se você não nos responder hoje, teremos que fazer o upload dos seus dados para o nosso blog.', 'Você pode se encontrar em nossa coluna de notícias: Se você deseja que esta postagem seja removida, temos que negociar algo.'],
  options: {
    //1.1.second
    'Me mande os sequintes arquivos: Arquivo1.txt, Arquivo2.txt e Arquivo3.txt. Também estou mandando três arquivos criptografados.': step1_1_second,
    //1.2.1.2
    'Não responder': step1_2_1_2
  }
}
var step1_2_1_2 = {
  //step 1.2.1.2
  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
  success: false,
  options: {
  }
}
var step1_1_2_1 = {
  //step 1.1.2.1 
  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
  success: false,
  options: {
  }
}
var step1_1_2_2 = {
  //step 1.1.2.2
  message: ['Eu discuti com minha gerência. Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
  options: {
    //1.1.2.2.1
    'Sim.': step1_1_2_2_1,
    //1.1.2.2.2
    'Não responder.': step1_1_2_2_2
  }
}
var step1_1_2_2_1 = {
  //step 1.1.2.2.1
  message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
  success: true,
  options: {
  }
}
var step1_1_2_2_2 = {
  //step 1.1.2.2.2
  message: ['Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
  options: {
    //1.1.2.2.1
    'Sim': step1_1_2_2_1,
    //1.1.2.2.2.2
    'Não responder': step1_1_2_2_2_2
  }
}

var step1_1_2_2_2_2 = {
  //step 1.1.2.2.2.2 
  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
  success: false,
  options: {
  }
}
// var step = {
//   //step 
//   message: [''],
//   options: {
//     //
//     '': {},
//     //
//     '': {}
//   }
// }

export var AkiraChat = {
  //step 0
  message: ['Olá. Você entrou em contato com o suporte do Akira. Atualmente estamos preparando a lista de dados que retiramos da sua rede. Por enquanto você tem que saber que negociar conosco é a melhor maneira possível de resolver isso de forma rápida e barata. Mantenha contato e seja paciente conosco. Entraremos em contato com você em breve. Você tem permissão para conduzir uma negociação em nome de sua organização?'],
  options: {
    // 1
    'Ok, tenho permissão para negociar, mas não tenho permissão para definir valores.': {
      //step 1
      message: ['Esses arquivos foram retirados da sua rede antes da criptografia. Você pode escolher de 2 a 3 arquivos aleatórios da lista e nós os enviaremos como prova de posse. Para provar que podemos descriptografar seus dados corretamente, você pode enviar de 2 a 3 arquivos criptografados para o nosso bate-papo e nós enviaremos cópias descriptografadas de volta.'],
      options: {
        // 1.1
        'Me mande os sequintes arquivos: Arquivo1.txt, Arquivo2.txt e Arquivo3.txt. Também estou mandando três arquivos criptografados.': {
          //step 1.1.first
          message: ['Aqui estão os arquivos, enquanto isso, apresentaremos uma demanda justa para você.', 'Então, examinamos seus arquivos para definir suas capacidades financeiras. Estivemos analisando seus extratos bancários, lucro líquido, limites de responsabilidade cibernética, auditorias financeiras - todas as informações que podem nos ajudar a calcular nossa demanda para você. Estamos dispostos a definir um preço de US$ 165.000 para TODOS os serviços que oferecemos: 1) assistência completa para descriptografia; 2) evidências de remoção de dados; 3) relatório de segurança sobre vulnerabilidades encontradas; 4) garantias de não publicar ou vender seus dados; 5) garantia de não atacar você no futuro. Deixe-me saber se você está interessado em um negócio completo ou em partes. Isso afetará o preço final.',],
          options: {
            //1.1.1
            'Vamos querer todos os serviços, podemos efetuar o pagamento imediatamente se você fornecer uma carteira BTC.': {
              //step 1.1.1
              message: ['Aqui está [Bitcoin Wallet].', 'Pagamento recebido.', 'Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
              success: true,
              options: {
              }
            },
            //1.1.2
            'Você está disposto a negociar um preço mais baixo?': {
              //step 1.1.2
              message: ['Depende do valor que você pode nos oferecer no momento.'],
              options: {
                //1.1.2.1
                'Podemos oferecer 5 mil agora, nossa última oferta.': {
                  //step 1.1.2.1 
                  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                  success: false,
                  options: {
                  }
                },
                //1.1.2.2
                'Agradecemos sua disposição em trabalhar conosco, podemos oferecer US$ 59 mil. Se você concordar, podemos efetuar o pagamento imediatamente assim que você fornecer uma carteira BTC.': {
                  //step 1.1.2.2
                  message: ['Eu discuti com minha gerência. Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                  options: {
                    //1.1.2.2.1
                    'Sim.': {
                      //step 1.1.2.2.1
                      message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                      success: true,
                      options: {
                      }
                    },
                    //1.1.2.2.2
                    'Não responder.': {
                      //step 1.1.2.2.2
                      message: ['Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                      options: {
                        //1.1.2.2.1
                        'Sim': {
                          //step 1.1.2.2.1
                          message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                          success: true,
                          options: {
                          }
                        },
                        //1.1.2.2.2.2
                        'Não responder': {
                          //step 1.1.2.2.2.2 
                          message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                          success: false,
                          options: {
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            //1.2.1
            'Não responder.': {
              //step 1.2.1
              message: ['Olá. Deixe-nos saber se você está interessado neste negócio. Se você não nos responder hoje, teremos que fazer o upload dos seus dados para o nosso blog.', 'Você pode se encontrar em nossa coluna de notícias: Se você deseja que esta postagem seja removida, temos que negociar algo.'],
              options: {
                //1.1.second
                'Me mande os sequintes arquivos: Arquivo1.txt, Arquivo2.txt e Arquivo3.txt. Também estou mandando três arquivos criptografados.': {
                  //step 1.1.second
                  message: ['Não iremos mais nos repetir', 'Já examinamos seus arquivos para definir suas capacidades financeiras. Estivemos analisando seus extratos bancários, lucro líquido, limites de responsabilidade cibernética, auditorias financeiras - todas as informações que podem nos ajudar a calcular nossa demanda para você. Estamos dispostos a definir um preço de US$ 165.000 para TODOS os serviços que oferecemos: 1) assistência completa para descriptografia; 2) evidências de remoção de dados; 3) relatório de segurança sobre vulnerabilidades encontradas; 4) garantias de não publicar ou vender seus dados; 5) garantia de não atacar você no futuro. Deixe-me saber se você está interessado em um negócio completo ou em partes. Isso afetará o preço final.',],
                  options: {
                    //1.1.1
                    'Vamos querer todos os serviços, podemos efetuar o pagamento imediatamente se você fornecer uma carteira BTC.': {
                      //step 1.1.1
                      message: ['Aqui está [Bitcoin Wallet].', 'Pagamento recebido.', 'Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                      success: true,
                      options: {
                      }
                    },
                    //1.1.2
                    'Você está disposto a negociar um preço mais baixo?': {
                      //step 1.1.2
                      message: ['Depende do valor que você pode nos oferecer no momento.'],
                      options: {
                        //1.1.2.1
                        'Podemos oferecer 5 mil agora, nossa última oferta.': {
                          //step 1.1.2.1 
                          message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                          success: false,
                          options: {
                          }
                        },
                        //1.1.2.2
                        'Agradecemos sua disposição em trabalhar conosco, podemos oferecer US$ 59 mil. Se você concordar, podemos efetuar o pagamento imediatamente assim que você fornecer uma carteira BTC.': {
                          //step 1.1.2.2
                          message: ['Eu discuti com minha gerência. Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                          options: {
                            //1.1.2.2.1
                            'Sim.': {
                              //step 1.1.2.2.1
                              message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                              success: true,
                              options: {
                              }
                            },
                            //1.1.2.2.2
                            'Não responder.': {
                              //step 1.1.2.2.2
                              message: ['Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                              options: {
                                //1.1.2.2.1
                                'Sim': {
                                  //step 1.1.2.2.1
                                  message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                                  success: true,
                                  options: {
                                  }
                                },
                                //1.1.2.2.2.2
                                'Não responder': {
                                  //step 1.1.2.2.2.2 
                                  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                                  success: false,
                                  options: {
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                  }
                },
                //1.2.1.2
                'Não responder': {
                  //step 1.1.2.1 
                  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                  success: false,
                  options: {
                  }
                }
              }
            },
          }
        },
        // 1.2
        'Não responder.': {
          //step 1.2
          message: ['Informe-nos se você está interessado em manter o incidente confidencial. Seu silêncio será avaliado como uma resposta negativa.'],
          options: {
            //1.2.1
            'Não responder.': {
              //step 1.2.1
              message: ['Olá. Deixe-nos saber se você está interessado neste negócio. Se você não nos responder hoje, teremos que fazer o upload dos seus dados para o nosso blog.', 'Você pode se encontrar em nossa coluna de notícias: Se você deseja que esta postagem seja removida, temos que negociar algo.'],
              options: {
                //1.1.second
                'Me mande os sequintes arquivos: Arquivo1.txt, Arquivo2.txt e Arquivo3.txt. Também estou mandando três arquivos criptografados.': {
                  //step 1.1.second
                  message: ['Não iremos mais nos repetir', 'Já examinamos seus arquivos para definir suas capacidades financeiras. Estivemos analisando seus extratos bancários, lucro líquido, limites de responsabilidade cibernética, auditorias financeiras - todas as informações que podem nos ajudar a calcular nossa demanda para você. Estamos dispostos a definir um preço de US$ 165.000 para TODOS os serviços que oferecemos: 1) assistência completa para descriptografia; 2) evidências de remoção de dados; 3) relatório de segurança sobre vulnerabilidades encontradas; 4) garantias de não publicar ou vender seus dados; 5) garantia de não atacar você no futuro. Deixe-me saber se você está interessado em um negócio completo ou em partes. Isso afetará o preço final.',],
                  options: {
                    //1.1.1
                    'Vamos querer todos os serviços, podemos efetuar o pagamento imediatamente se você fornecer uma carteira BTC.': {
                      //step 1.1.1
                      message: ['Aqui está [Bitcoin Wallet].', 'Pagamento recebido.', 'Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                      success: true,
                      options: {
                      }
                    },
                    //1.1.2
                    'Você está disposto a negociar um preço mais baixo?': {
                      //step 1.1.2
                      message: ['Depende do valor que você pode nos oferecer no momento.'],
                      options: {
                        //1.1.2.1
                        'Podemos oferecer 5 mil agora, nossa última oferta.': {
                          //step 1.1.2.1 
                          message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                          success: false,
                          options: {
                          }
                        },
                        //1.1.2.2
                        'Agradecemos sua disposição em trabalhar conosco, podemos oferecer US$ 59 mil. Se você concordar, podemos efetuar o pagamento imediatamente assim que você fornecer uma carteira BTC.': {
                          //step 1.1.2.2
                          message: ['Eu discuti com minha gerência. Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                          options: {
                            //1.1.2.2.1
                            'Sim.': {
                              //step 1.1.2.2.1
                              message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                              success: true,
                              options: {
                              }
                            },
                            //1.1.2.2.2
                            'Não responder.': {
                              //step 1.1.2.2.2
                              message: ['Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                              options: {
                                //1.1.2.2.1
                                'Sim': {
                                  //step 1.1.2.2.1
                                  message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                                  success: true,
                                  options: {
                                  }
                                },
                                //1.1.2.2.2.2
                                'Não responder': {
                                  //step 1.1.2.2.2.2 
                                  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                                  success: false,
                                  options: {
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                  }
                },
                //1.2.1.2
                'Não responder': {
                  //step 1.2.1.2
                  message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                  success: false,
                  options: {
                  }
                }
              }
            },
            //1.1
            'Ok, me mande os sequintes arquivos: Arquivo1.txt, Arquivo2.txt e Arquivo3.txt. Também estou mandando três arquivos criptografados.': {
              //step 1.1.first
              message: ['Aqui estão os arquivos, enquanto isso, apresentaremos uma demanda justa para você.', 'Então, examinamos seus arquivos para definir suas capacidades financeiras. Estivemos analisando seus extratos bancários, lucro líquido, limites de responsabilidade cibernética, auditorias financeiras - todas as informações que podem nos ajudar a calcular nossa demanda para você. Estamos dispostos a definir um preço de US$ 165.000 para TODOS os serviços que oferecemos: 1) assistência completa para descriptografia; 2) evidências de remoção de dados; 3) relatório de segurança sobre vulnerabilidades encontradas; 4) garantias de não publicar ou vender seus dados; 5) garantia de não atacar você no futuro. Deixe-me saber se você está interessado em um negócio completo ou em partes. Isso afetará o preço final.',],
              options: {
                //1.1.1
                'Vamos querer todos os serviços, podemos efetuar o pagamento imediatamente se você fornecer uma carteira BTC.': {
                  //step 1.1.1
                  message: ['Aqui está [Bitcoin Wallet].', 'Pagamento recebido.', 'Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                  success: true,
                  options: {
                  }
                },
                //1.1.2
                'Você está disposto a negociar um preço mais baixo?': {
                  //step 1.1.2
                  message: ['Depende do valor que você pode nos oferecer no momento.'],
                  options: {
                    //1.1.2.1
                    'Podemos oferecer 5 mil agora, nossa última oferta.': {
                      //step 1.1.2.1 
                      message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                      success: false,
                      options: {
                      }
                    },
                    //1.1.2.2
                    'Agradecemos sua disposição em trabalhar conosco, podemos oferecer US$ 59 mil. Se você concordar, podemos efetuar o pagamento imediatamente assim que você fornecer uma carteira BTC.': {
                      //step 1.1.2.2
                      message: ['Eu discuti com minha gerência. Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                      options: {
                        //1.1.2.2.1
                        'Sim.': {
                          //step 1.1.2.2.1
                          message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                          success: true,
                          options: {
                          }
                        },
                        //1.1.2.2.2
                        'Não responder.': {
                          //step 1.1.2.2.2
                          message: ['Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                          options: {
                            //1.1.2.2.1
                            'Sim': {
                              //step 1.1.2.2.1
                              message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                              success: true,
                              options: {
                              }
                            },
                            //1.1.2.2.2.2
                            'Não responder': {
                              //step 1.1.2.2.2.2 
                              message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                              success: false,
                              options: {
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                //1.2.1
                'Não responder.': {
                  //step 1.2.1
                  message: ['Olá. Deixe-nos saber se você está interessado neste negócio. Se você não nos responder hoje, teremos que fazer o upload dos seus dados para o nosso blog.', 'Você pode se encontrar em nossa coluna de notícias: Se você deseja que esta postagem seja removida, temos que negociar algo.'],
                  options: {
                    //1.1.second
                    'Me mande os sequintes arquivos: Arquivo1.txt, Arquivo2.txt e Arquivo3.txt. Também estou mandando três arquivos criptografados.': {
                      //step 1.1.second
                      message: ['Não iremos mais nos repetir', 'Já examinamos seus arquivos para definir suas capacidades financeiras. Estivemos analisando seus extratos bancários, lucro líquido, limites de responsabilidade cibernética, auditorias financeiras - todas as informações que podem nos ajudar a calcular nossa demanda para você. Estamos dispostos a definir um preço de US$ 165.000 para TODOS os serviços que oferecemos: 1) assistência completa para descriptografia; 2) evidências de remoção de dados; 3) relatório de segurança sobre vulnerabilidades encontradas; 4) garantias de não publicar ou vender seus dados; 5) garantia de não atacar você no futuro. Deixe-me saber se você está interessado em um negócio completo ou em partes. Isso afetará o preço final.',],
                      options: {
                        //1.1.1
                        'Vamos querer todos os serviços, podemos efetuar o pagamento imediatamente se você fornecer uma carteira BTC.': {
                          //step 1.1.1
                          message: ['Aqui está [Bitcoin Wallet].', 'Pagamento recebido.', 'Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                          success: true,
                          options: {
                          }
                        },
                        //1.1.2
                        'Você está disposto a negociar um preço mais baixo?': {
                          //step 1.1.2
                          message: ['Depende do valor que você pode nos oferecer no momento.'],
                          options: {
                            //1.1.2.1
                            'Podemos oferecer 5 mil agora, nossa última oferta.': {
                              //step 1.1.2.1 
                              message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                              success: false,
                              options: {
                              }
                            },
                            //1.1.2.2
                            'Agradecemos sua disposição em trabalhar conosco, podemos oferecer US$ 59 mil. Se você concordar, podemos efetuar o pagamento imediatamente assim que você fornecer uma carteira BTC.': {
                              //step 1.1.2.2
                              message: ['Eu discuti com minha gerência. Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                              options: {
                                //1.1.2.2.1
                                'Sim.': {
                                  //step 1.1.2.2.1
                                  message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                                  success: true,
                                  options: {
                                  }
                                },
                                //1.1.2.2.2
                                'Não responder.': {
                                  //step 1.1.2.2.2
                                  message: ['Podemos aceitar $ 75.000. Isto é definitivo. Você precisa de nossa carteira BTC?'],
                                  options: {
                                    //1.1.2.2.1
                                    'Sim': {
                                      //step 1.1.2.2.1
                                      message: ['Forneceremos o relatório e o registro de exclusão em 24 horas.', 'O acesso inicial à sua rede foi adquirido na dark web. Passando semanas dentro de sua rede, conseguimos detectar algumas falhas que recomendamos fortemente eliminar: 1. Nenhum de seus funcionários deve abrir e-mails suspeitos, links suspeitos ou baixar qualquer arquivo, muito menos executá-los em seus computadores. 2. Use senhas fortes e altere-as sempre que possível (pelo menos 1 a 2 vezes por mês). As senhas não devem corresponder ou ser repetidas em recursos diferentes. 3. Instale 2FA sempre que possível. 4. Utilize as versões mais recentes dos sistemas operacionais, pois são menos vulneráveis a ataques. 5. Atualize todas as versões de software. 6. Use soluções antivírus e ferramentas de monitoramento de tráfego. 7. Crie um jump server para sua VPN. Use credenciais exclusivas que sejam diferentes do domínio . 8. Use software de backup com armazenamento em nuvem que suporte uma chave de token. 9. Instrua seus funcionários com a maior freqüência possível sobre as precauções de segurança online. O ponto mais vulnerável é o fator humano e a irresponsabilidade de seus funcionários, administradores de sistemas, etc. Desejamos-lhe segurança, tranquilidade e muitos benefícios no futuro. Obrigado por trabalhar conosco e por sua atitude cuidadosa com sua segurança. O log de exclusão chegará mais tarde.'],
                                      success: true,
                                      options: {
                                      }
                                    },
                                    //1.1.2.2.2.2
                                    'Não responder': {
                                      //step 1.1.2.2.2.2 
                                      message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                                      success: false,
                                      options: {
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                      }
                    },
                    //1.2.1.2
                    'Não responder': {
                      //step 1.1.2.1 
                      message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede.'],
                      success: false,
                      options: {
                      }
                    }
                  }
                },
              }
            }
          }
        }
      }
    },
    // 2
    'Vai se ferrar %&*#@#, não vou negociar com vocês nunca.': {
      //step 2
      message: ['Parabéns, você virou notícia, estamos publicando dados sensíveis de seus clientes que foram retirados de sua rede. '],
      success: false,
      options: {
      }
    }
  }
}