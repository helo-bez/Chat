import { success } from "@/components/Atoms/Text/Text.stories";

export const chat = {
  'Akira': {
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
              'Não responder': {
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
                  'Não responder.': {
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
  },
  'LockBit': {
    //step 0
    message: ['user_response: Gostaríamos de recuperar seus arquivos, etc. Quais são suas instruções para recuperar nossos dados?', 'Olá, o preço para toda a sua rede é de 100 mil dólares.', 'Temos mailbox.edb e todos os arquivos de seus usuários. Se você não pagar, iremos publicá-los, leve em consideração que não temos o que fazer com eles.'],
    options: {
      //1
      'Olá, consultei este número e esta não é uma oferta realista. Temos backup e podemos restaurar, isso vai levar algum tempo e dinheiro. Estamos dispostos a pagar 5k.': {
        //step 1
        message: ['Se você tem backup, por que está aqui? Eu mesmo apaguei seu NAS...'],
        options: {
          //1.1
          'Temos arquivos de backup mais antigos em dispositivos externos.': {
            //step 1.1
            message: ['Venha com uma oferta melhor do que 5k.'],
            options: {
              //1.1.1
              'Tenho que consultar mas acho que não vão aceitar nada superior.': {
                //step 1.1.1
                message: ['Você é da empresa de TI? Eles contrataram você para falar conosco ou o quê?'],
                options: {
                  //1.1.1.1
                  'Somos o time de TI.': {
                    //step 1.1.1.1
                    message: ['Como dissemos, sem intermediários.. no passado eles ferraram com nossos negociadores.'],
                    options: {
                      //1.1.1.1.1
                      'Podemos pagar 6k, isso é o máximo, não podemos pagar mais.': {
                        //step 1.1.1.1.1
                        message: ['6K não vai rolar.'],
                        options: {
                          //1.1.1.1.1.1
                          'Passe uma demanda real.': {
                            //step 1.1.1.1.1.1
                            message: ['O valor mais baixo que podemos oferecer é 60k. Tenha um bom dia.'],
                            options: {
                              //1.1.1.1.1.1.1
                              'Beleza mano, vou restaurar meu backup, boa sorte.': {
                                //step 1.1.1.1.1.1.1
                                message: ['Ok, 15k euros.'],
                                options: {
                                  //1.1.1.1.1.1.1.1
                                  'Ok, vamos aceitar.': {
                                    //step 1.1.1.1.1.1.1.1
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  },
                                  //1.1.1.1.1.1.2
                                  'Não responder.': {
                                    //step 1.1.1.1.1.1.2
                                    message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                    options: {
                                      //1.1.1.1.1.1.3
                                      'Ok, vamos aceitar 60K': {
                                        //step 1.1.1.1.1.1.3
                                        message: ['Segue arquivo para decriptografia.'],
                                        success: true,
                                        options: {
                                        }
                                      },
                                      //1.1.1.1.1.1.2.2
                                      'Não responder': {
                                        //step 1.1.1.1.1.1.2.2
                                        message: [],
                                        success: false,
                                        options: {
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              //1.1.1.1.1.1.2
                              'Não responder.': {
                                //step 1.1.1.1.1.1.2
                                message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                options: {
                                  //1.1.1.1.1.1.3
                                  'Ok, vamos aceitar 60K': {
                                    //step 1.1.1.1.1.1.3
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  },
                                  //1.1.1.1.1.1.2.2
                                  'Não responder': {
                                    //step 1.1.1.1.1.1.2.2
                                    message: [],
                                    success: false,
                                    options: {
                                    }
                                  }
                                }
                              },
                              //1.1.1.1.1.1.3
                              'Ok, vamos aceitar 60K.': {
                                //step 1.1.1.1.1.1.3
                                message: ['Segue arquivo para decriptografia.'],
                                success: true,
                                options: {
                                }
                              }
                            }
                          },
                          //1.1.1.1.1.2
                          'Oferta final: 10k ou começaremos a restaurar o backup externo. Você pode responder até às 15h30 CEST.': {
                            ///step 1.1.1.1.1.2
                            message: ['O valor mais baixo que podemos oferecer é 60k. Tenha um bom dia.'],
                            options: {
                              //1.1.1.1.1.1.1
                              'Beleza mano, vou restaurar meu backup, boa sorte.': {
                                //step 1.1.1.1.1.1.1
                                message: ['Ok, 15k euros.'],
                                options: {
                                  //1.1.1.1.1.1.1.1
                                  'Ok, vamos aceitar.': {
                                    //step 1.1.1.1.1.1.1.1
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  },
                                  //1.1.1.1.1.1.2
                                  'Não responder.': {
                                    //step 1.1.1.1.1.1.2
                                    message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                    options: {
                                      //1.1.1.1.1.1.3
                                      'Ok, vamos aceitar 60K': {
                                        //step 1.1.1.1.1.1.3
                                        message: ['Segue arquivo para decriptografia.'],
                                        success: true,
                                        options: {
                                        }
                                      },
                                      //1.1.1.1.1.1.2.2
                                      'Não responder': {
                                        //step 1.1.1.1.1.1.2.2
                                        message: [],
                                        success: false,
                                        options: {
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              //1.1.1.1.1.1.2
                              'Não responder.': {
                                //step 1.1.1.1.1.1.2
                                message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                options: {
                                  //1.1.1.1.1.1.3
                                  'Ok, vamos aceitar 60K': {
                                    //step 1.1.1.1.1.1.3
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  },
                                  //1.1.1.1.1.1.2.2
                                  'Não responder': {
                                    //step 1.1.1.1.1.1.2.2
                                    message: [],
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
                      //1.1.1.1.2
                      'Não responder.': {
                        //step 1.1.1.1.2
                        message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                        success: false,
                        options: {
                        }
                      }
                    }
                  },
                  //1.1.1.2
                  'Somos consultores contratados para negociar.': {
                    //step 1.1.1.2
                    message: ['Vocês ferram nosso négocio.'],
                    options: {
                      //1.1.1.1.2
                      'Consultei o cliente e ele pode pagar 6k, isso é o máximo, não pode pagar mais.': {
                        //step 1.1.1.1.2
                        message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                        success: false,
                        options: {
                        }
                      },
                      //2.2
                      'Não responder.': {
                        //step 2.2
                        message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                        success: false,
                        options: {
                        }
                      }
                    }
                  }
                }
              },
              //1.1.2
              'Essa é nossa oferta final.': {
                //step 1.1.2
                message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                success: false,
                options: {
                }
              }
            }
          },
          //2
          'Não responder': {
            //step 2
            message: ['Estamos preparando um post para publicar seus dados na Internet.'],
            options: {
              //2.1
              'Então, estamos aqui porque levará algum tempo para restaurá-los e inserir os dados ausentes.': {
                //step 2.1
                message: ['Venha com uma oferta melhor do que 5k.'],
                options: {
                  //1.1.1
                  'Olá, consultei este número e esta não é uma oferta realista. Temos backup e podemos restaurar, isso vai levar algum tempo e dinheiro. Estamos dispostos a pagar 5k.': {
                    //step 1.1.1
                    message: ['Você é da empresa de TI? Eles contrataram você para falar conosco ou o quê?'],
                    options: {
                      //1.1.1.1
                      'Somos o time de TI.': {
                        //step 1.1.1.1
                        message: ['Como dissemos, sem intermediários.. no passado eles ferraram com nossos negociadores.'],
                        options: {
                          //1.1.1.1.1
                          'Podemos pagar 6k, isso é o máximo, não podemos pagar mais.': {
                            //step 1.1.1.1.1
                            message: ['6K não vai rolar.'],
                            options: {
                              //1.1.1.1.1.1
                              'Passe uma demanda real.': {
                                //step 1.1.1.1.1.1
                                message: ['O valor mais baixo que podemos oferecer é 60k. Tenha um bom dia.'],
                                options: {
                                  //1.1.1.1.1.1.1
                                  'Beleza mano, vou restaurar meu backup, boa sorte.': {
                                    //step 1.1.1.1.1.1.1
                                    message: ['Ok, 15k euros.'],
                                    options: {
                                      //1.1.1.1.1.1.1.1
                                      'Ok, vamos aceitar.': {
                                        //step 1.1.1.1.1.1.1.1
                                        message: ['Segue arquivo para decriptografia.'],
                                        success: true,
                                        options: {
                                        }
                                      },
                                      //1.1.1.1.1.1.2
                                      'Não responder.': {
                                        //step 1.1.1.1.1.1.2
                                        message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                        options: {
                                          //1.1.1.1.1.1.3
                                          'Ok, vamos aceitar 60K': {
                                            //step 1.1.1.1.1.1.3
                                            message: ['Segue arquivo para decriptografia.'],
                                            success: true,
                                            options: {
                                            }
                                          },
                                          //1.1.1.1.1.1.2.2
                                          'Não responder': {
                                            //step 1.1.1.1.1.1.2.2
                                            message: [],
                                            success: false,
                                            options: {
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  //1.1.1.1.1.1.2
                                  'Não responder.': {
                                    //step 1.1.1.1.1.1.2
                                    message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                    options: {
                                      //1.1.1.1.1.1.3
                                      'Ok, vamos aceitar 60K': {
                                        //step 1.1.1.1.1.1.3
                                        message: ['Segue arquivo para decriptografia.'],
                                        success: true,
                                        options: {
                                        }
                                      },
                                      //1.1.1.1.1.1.2.2
                                      'Não responder': {
                                        //step 1.1.1.1.1.1.2.2
                                        message: [],
                                        success: false,
                                        options: {
                                        }
                                      }
                                    }
                                  },
                                  //1.1.1.1.1.1.3
                                  'Ok, vamos aceitar 60K.': {
                                    //step 1.1.1.1.1.1.3
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  }
                                }
                              },
                              //1.1.1.1.1.2
                              'Oferta final: 10k ou começaremos a restaurar o backup externo. Você pode responder até às 15h30 CEST.': {
                                ///step 1.1.1.1.1.2
                                message: ['O valor mais baixo que podemos oferecer é 60k. Tenha um bom dia.'],
                                options: {
                                  //1.1.1.1.1.1.1
                                  'Beleza mano, vou restaurar meu backup, boa sorte.': {
                                    //step 1.1.1.1.1.1.1
                                    message: ['Ok, 15k euros.'],
                                    options: {
                                      //1.1.1.1.1.1.1.1
                                      'Ok, vamos aceitar.': {
                                        //step 1.1.1.1.1.1.1.1
                                        message: ['Segue arquivo para decriptografia.'],
                                        success: true,
                                        options: {
                                        }
                                      },
                                      //1.1.1.1.1.1.2
                                      'Não responder.': {
                                        //step 1.1.1.1.1.1.2
                                        message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                        options: {
                                          //1.1.1.1.1.1.3
                                          'Ok, vamos aceitar 60K': {
                                            //step 1.1.1.1.1.1.3
                                            message: ['Segue arquivo para decriptografia.'],
                                            success: true,
                                            options: {
                                            }
                                          },
                                          //1.1.1.1.1.1.2.2
                                          'Não responder': {
                                            //step 1.1.1.1.1.1.2.2
                                            message: [],
                                            success: false,
                                            options: {
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  //1.1.1.1.1.1.2
                                  'Não responder.': {
                                    //step 1.1.1.1.1.1.2
                                    message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                    options: {
                                      //1.1.1.1.1.1.3
                                      'Ok, vamos aceitar 60K': {
                                        //step 1.1.1.1.1.1.3
                                        message: ['Segue arquivo para decriptografia.'],
                                        success: true,
                                        options: {
                                        }
                                      },
                                      //1.1.1.1.1.1.2.2
                                      'Não responder': {
                                        //step 1.1.1.1.1.1.2.2
                                        message: [],
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
                          //1.1.1.1.2
                          'Não responder.': {
                            //step 1.1.1.1.2
                            message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                            success: false,
                            options: {
                            }
                          }
                        }
                      },
                      //1.1.1.2
                      'Somos consultores contratados para negociar.': {
                        //step 1.1.1.2
                        message: ['Vocês ferram nosso négocio.'],
                        options: {
                          //1.1.1.1.2
                          'Consultei o cliente e ele pode pagar 6k, isso é o máximo, não pode pagar mais.': {
                            //step 1.1.1.1.2
                            message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                            success: false,
                            options: {
                            }
                          },
                          //2.2
                          'Não responder.': {
                            //step 2.2
                            message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                            success: false,
                            options: {
                            }
                          }
                        }
                      }
                    }
                  },
                  //1.1.2
                  'Não responder.': {
                  }
                }
              },
              //2.2
              'Não responder.': {
                //step 2.2
                message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                success: false,
                options: {
                }
              }
            }
          }
        }
      },
      //2
      'Não responder.': {
        //step 2
        message: ['Estamos preparando um post para publicar seus dados na Internet.'],
        options: {
          //2.1
          'Então, estamos aqui porque levará algum tempo para restaurá-los e inserir os dados ausentes.': {
            //step 2.1
            message: ['Venha com uma oferta melhor do que 5k.'],
            options: {
              //1.1.1
              'Olá, consultei este número e esta não é uma oferta realista. Temos backup e podemos restaurar, isso vai levar algum tempo e dinheiro. Estamos dispostos a pagar 5k.': {
                //step 1.1.1
                message: ['Você é da empresa de TI? Eles contrataram você para falar conosco ou o quê?'],
                options: {
                  //1.1.1.1
                  'Somos o time de TI.': {
                    //step 1.1.1.1
                    message: ['Como dissemos, sem intermediários.. no passado eles ferraram com nossos negociadores.'],
                    options: {
                      //1.1.1.1.1
                      'Podemos pagar 6k, isso é o máximo, não podemos pagar mais.': {
                        //step 1.1.1.1.1
                        message: ['6K não vai rolar.'],
                        options: {
                          //1.1.1.1.1.1
                          'Passe uma demanda real.': {
                            //step 1.1.1.1.1.1
                            message: ['O valor mais baixo que podemos oferecer é 60k. Tenha um bom dia.'],
                            options: {
                              //1.1.1.1.1.1.1
                              'Beleza mano, vou restaurar meu backup, boa sorte.': {
                                //step 1.1.1.1.1.1.1
                                message: ['Ok, 15k euros.'],
                                options: {
                                  //1.1.1.1.1.1.1.1
                                  'Ok, vamos aceitar.': {
                                    //step 1.1.1.1.1.1.1.1
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  },
                                  //1.1.1.1.1.1.2
                                  'Não responder.': {
                                    //step 1.1.1.1.1.1.2
                                    message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                    options: {
                                      //1.1.1.1.1.1.3
                                      'Ok, vamos aceitar 60K': {
                                        //step 1.1.1.1.1.1.3
                                        message: ['Segue arquivo para decriptografia.'],
                                        success: true,
                                        options: {
                                        }
                                      },
                                      //1.1.1.1.1.1.2.2
                                      'Não responder': {
                                        //step 1.1.1.1.1.1.2.2
                                        message: [],
                                        success: false,
                                        options: {
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              //1.1.1.1.1.1.2
                              'Não responder.': {
                                //step 1.1.1.1.1.1.2
                                message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                options: {
                                  //1.1.1.1.1.1.3
                                  'Ok, vamos aceitar 60K': {
                                    //step 1.1.1.1.1.1.3
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  },
                                  //1.1.1.1.1.1.2.2
                                  'Não responder': {
                                    //step 1.1.1.1.1.1.2.2
                                    message: [],
                                    success: false,
                                    options: {
                                    }
                                  }
                                }
                              },
                              //1.1.1.1.1.1.3
                              'Ok, vamos aceitar 60K.': {
                                //step 1.1.1.1.1.1.3
                                message: ['Segue arquivo para decriptografia.'],
                                success: true,
                                options: {
                                }
                              }
                            }
                          },
                          //1.1.1.1.1.2
                          'Oferta final: 10k ou começaremos a restaurar o backup externo. Você pode responder até às 15h30 CEST.': {
                            ///step 1.1.1.1.1.2
                            message: ['O valor mais baixo que podemos oferecer é 60k. Tenha um bom dia.'],
                            options: {
                              //1.1.1.1.1.1.1
                              'Beleza mano, vou restaurar meu backup, boa sorte.': {
                                //step 1.1.1.1.1.1.1
                                message: ['Ok, 15k euros.'],
                                options: {
                                  //1.1.1.1.1.1.1.1
                                  'Ok, vamos aceitar.': {
                                    //step 1.1.1.1.1.1.1.1
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  },
                                  //1.1.1.1.1.1.2
                                  'Não responder.': {
                                    //step 1.1.1.1.1.1.2
                                    message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                    options: {
                                      //1.1.1.1.1.1.3
                                      'Ok, vamos aceitar 60K': {
                                        //step 1.1.1.1.1.1.3
                                        message: ['Segue arquivo para decriptografia.'],
                                        success: true,
                                        options: {
                                        }
                                      },
                                      //1.1.1.1.1.1.2.2
                                      'Não responder': {
                                        //step 1.1.1.1.1.1.2.2
                                        message: [],
                                        success: false,
                                        options: {
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              //1.1.1.1.1.1.2
                              'Não responder.': {
                                //step 1.1.1.1.1.1.2
                                message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
                                options: {
                                  //1.1.1.1.1.1.3
                                  'Ok, vamos aceitar 60K': {
                                    //step 1.1.1.1.1.1.3
                                    message: ['Segue arquivo para decriptografia.'],
                                    success: true,
                                    options: {
                                    }
                                  },
                                  //1.1.1.1.1.1.2.2
                                  'Não responder': {
                                    //step 1.1.1.1.1.1.2.2
                                    message: [],
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
                      //1.1.1.1.2
                      'Não responder.': {
                        //step 1.1.1.1.2
                        message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                        success: false,
                        options: {
                        }
                      }
                    }
                  },
                  //1.1.1.2
                  'Somos consultores contratados para negociar.': {
                    //step 1.1.1.2
                    message: ['Vocês ferram nosso négocio.'],
                    options: {
                      //1.1.1.1.2
                      'Consultei o cliente e ele pode pagar 6k, isso é o máximo, não pode pagar mais.': {
                        //step 1.1.1.1.2
                        message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                        success: false,
                        options: {
                        }
                      },
                      //2.2
                      'Não responder': {
                        //step 2.2
                        message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
                        success: false,
                        options: {
                        }
                      }
                    }
                  }
                }
              },
              //1.1.2
              'Não responder': {
              }
            }
          },
          //2.2
          'Não responder': {
            //step 2.2
            message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
            success: false,
            options: {
            }
          }
        }
      }
    }
  },
  'REvil': {
    //step 0
    message: ['Escolha como você quer começar a negociação:'],
    options: {
      //1
      'Olá pessoal, sou o responsável por negociar com vocês em nome do meu cliente. A quantidade de $$  solicitada ao meu cliente para obter a ferramenta de descriptografia, os arquivos disponíveis de volta e não publicados na dark web é enorme e meu cliente não pode pagar integralmente suas reivindicações. O meu cliente esta em situação difícil, uma vez que foi fortemente atingido pela atual crise econômica devido à pandemia do coronavírus, com uma queda dramática nas vendas nos últimos meses. A situação financeira do meu cliente tem sido catastrófica desde 2010, com uma diminuição substancial anual nas receitas líquidas e no lucro operacional bruto. O ataque cibernético que você realizou nos sistemas do meu cliente bloqueou a operação da empresa e todas as suas operações internas foram encerradas, incluindo entregas, e como consequência, meu cliente não consegue atender o mercado com seus produtos e obter receitas. O meu cliente já teve de fazer cortes orçamentais e despedir muitos dos seus funcionários ou colocá-los num seguro de desemprego, com efeitos devastadores para as famílias e crianças no meio da crise econômica. Portanto, é impossível para o meu cliente pagar-lhe 7,5 milhões de dólares. De acordo com a situação financeira do meu cliente, acho que ele pode estar pensando em pagar uma determinada quantia para proteger seu negócio, no entanto, esse valor seria inferior ao solicitado. Na minha opinião pessoal, o meu cliente tem disponibilidade financeira para lhe pagar 500.000 USD muito rapidamente. Um montante maior seria muito difícil de ser pago. Deixe-me saber sobre este ponto.': {
        //step 1
        message: ['Olá. Temos negócios com muitas empresas todos os dias, a nossa política de preços tem em conta a crise do Covid19. Não se esconda, o preço é acessível para a empresa. 500k de uma empresa como a sua não é sério, claro que podemos te dar um desconto que vai depender da rapidez do seu pagamento, mas o preço não pode ser muito baixo como você pede. Escondemos a postagem do nosso blog, se chegarmos a um acordo, esta informação nunca será publicada.'],
        options: {
          //1.1
          'Que tipo de desconto vocês estão pensando? Meu cliente está realmente em uma situação econômica difícil, farei o possível para convencê-lo a colocar um pouco mais de dinheiro na mesa de negociações. No entanto, adicionar dinheiro a sua última oferta implicaria mais cortes orçamentais e demissões de mais funcionários, deixando as famílias sem meios de subsistência nesta dramática crise financeira.': {
            //step 1.1
            message: ['Você não tem chances com $500.000, não tente blefar com isso. Se você pagar em breve, aceitamos US$ 6,75 milhões. Caso contrário, iniciamos a publicação dos dados parte por parte para agilizar você.'],
            options: {
              //1.1.1
              'Você tem certeza de que meu cliente tem capacidade financeira para atender às suas demandas? Se você olhar os relatórios, bem como as notícias dos jornais, poderá facilmente ver que eles estão em sérios apuros.': {
                //step 1.1.1
                message: ['Se você realizou muitas negociações com o REvil, deve saber que empresas muito menores pagam mais do que a sua oferta.'],
                options: {
                  //1.1.1.1
                  'Bem, felizmente não foi o meu caso! Sim, confirmo que empreendi muitas negociações com afiliados do REvil e não esbarrei em nenhuma negociação com pagamento superior a 1 M. Há dois meses um afiliado do REvil atacou uma empresa italiana muito famosa. A solicitação inicial foi de 7,5 milhões de dólares, o negócio foi fechado por US$ 750 mil. Você pode perguntar aos afiliados do REvil se não estou falando a verdade.': {
                    //step 1.1.1.1
                    message: ['Não vou mais entrar em longas conversas e polêmicas. Você conhece os termos e condições e eles permanecerão inalterados.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento.': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //1.1.2.2
                      'Não responder.': {
                        //step 1.1.2.2
                        message: ['Você terá mais um dia antes que a publicação com seus dados ganhe o mundo.'],
                        options: {
                          //2.2.1.2.2.1
                          'Efetuar pagamento': {
                            //step 2.2.1.2.2.1
                            message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                            success: true,
                            options: {
                            }
                          },
                          //2.1
                          'Não responder': {
                            //step 2.1
                            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                            success: false,
                            options: {
                            }
                          }
                        }
                      }
                    }
                  },
                  //1.1.1.2
                  'A situação é a seguinte: 1- Meu cliente tem uma disponibilidade financeira muito limitada. 2- Ele já está trabalhando na restauração da rede. 3- O tempo necessário para restaurar a rede do zero será de quase 12 dias. 4- Há backups disponíveis em fitas LTO. 5- A perda do lucro por interrupção de negócios será limitada e coberta pela apólice de seguro.': {
                    //step 1.1.1.2
                    message: ['Tendo em conta esta situação, US$ 5 milhões são razoáveis.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento.': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //1.1.2.2
                      'Não responder.': {
                        //step 1.1.2.2
                        message: ['Você terá mais um dia antes que a publicação com seus dados ganhe o mundo.'],
                        options: {
                          //2.2.1.2.2.1
                          'Efetuar pagamento': {
                            //step 2.2.1.2.2.1
                            message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                            success: true,
                            options: {
                            }
                          },
                          //2.1
                          'Não responder': {
                            //step 2.1
                            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
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
              //1.1.2
              'Conversei com o cliente e eles compartilharam que as margens de lucro sobre a receita gerada são minúsculas e, devido à falta de negócios, é difícil conseguir dinheiro real para se transformar em monero. Eles entendem que você pede mais dinheiro, mas queriam que eu informasse que estão tendo dificuldades para conseguir mais dinheiro. Agora têm acesso a 1,27 milhões de dólares em dinheiro, mas só estarão disponíveis na segunda-feira, uma vez que não podem enviar dinheiro com os bancos fechados.': {
                //step 1.1.2
                message: ['Sua última oferta é de US$ 1,27 milhão. Se concordarmos, quanto tempo você precisa para efetuar o pagamento?'],
                options: {
                  //1.1.2.1
                  'Sim, correto. Precisaremos de cerca de um dia, pois comprar Monero leva tempo, principalmente quando usamos uma corretora nos EUA': {
                    //step 1.1.2.1.2
                    message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                    success: false,
                    options: {
                    }
                  },
                  //1.1.2.2
                  'Não responder': {
                    //step 1.1.2.2
                    message: ['Você terá mais um dia antes que a publicação com seus dados ganhe o mundo.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //2.1
                      'Não responder': {
                        //step 2.1
                        message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                        success: false,
                        options: {
                        }
                      }
                    }
                  }
                }
              },
              //2.2.2.1
              'Não responder.': {
                //step 2.2.2.1
                message: ['300 mil e tudo bem, se você pagar rapidamente.'],
                options: {
                  //2.2.1.2.2
                  'Nossa, isso é incrível. Estamos muito gratos pelo enorme desconto. Queremos deixar isso para trás o mais rápido possível. Pode enviar os dados para pagamento.': {
                    //step 2.2.1.2.2
                    message: ['OK, seguem informações para pagamento....'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento.': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //1.1.2.1.2
                      'Não responder.': {
                        //step 1.1.2.1.2
                        message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                        success: false,
                        options: {
                        }
                      }
                    }
                  },
                  //2.2.1.1
                  'Nossa, isso é incrível. Estamos muito gratos pelo enorme desconto. Queremos deixar isso para trás o mais rápido possível. Provavelmente podemos conseguir US$ 300.000, mas não temos isso hoje. Provavelmente conseguiríamos recebê-lo até segunda-feira. Se você quiser algo hoje, sei que temos exatamente US$ 264.766 porque estou vendo um e-mail agora. Podemos conseguir $ 264.766. Se você realmente precisa de US$ 300 mil, levará mais algum tempo. Podemos pagar a você os US$ 264.766 nas próximas 24 horas e acabar com isso.': {
                    //step 2.2.1.1
                    message: ['Você terá mais um dia até que a publicação com seus dados ganhe o mundo.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento.': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //1.1.2.1.2
                      'Não responder': {
                        //step 1.1.2.1.2
                        message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
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
          //1.2
          'Bem, então vocês estão familiarizados com economia. Acho que você escolheu a vítima errada e a análise financeira que realizou antes de iniciar as operações de hacking está absolutamente errada. Veja o gráfico aqui anexo e talvez você consiga entender que economia não é hacking e meu cliente não é Grubman nem Travelex. Meu cliente precisa retomar as operações normais o mais rápido possível, minimizando as perdas financeiras devido à inatividade causada por suas ações. Portanto, precisamos encontrar um equilíbrio entre suas solicitações e a capacidade de pagamento do meu cliente. Muito dinheiro solicitado e realmente meu cliente não tem essa capacidade financeira. Meu cliente entende sua posição e aspirações, mas não consegue atingir esse valor. Da noite para o dia, convenci meu cliente a colocar mais dinheiro na mesa. A sua oferta agora é 750.000,00 mais do que isso implica em perda de empregos. Pessoas serão demitidas em meio a esta crise financeira.': {
            //step 1.2
            message: ['Você escreve muito texto, mas tudo isso não importa. Por que? Seu cliente é UM dos MAIORES fabricantes do MUNDO. Seu cliente gastou alguns milhões em software e hardware de recuperação para isso, mas os administradores usaram senhas como "123456". Mas claro que não podemos aceitar sua oferta de 750k porque isso é ridículo. Estamos pensando que você está blefando e tentando diminuir o preço, mas entendo que é apenas seu trabalho. Você está trabalhando bem, preço atualizado para US$ 5 milhões'],
            options: {
              //1.1.2
              'Conversei com o cliente e eles compartilharam que as margens de lucro sobre a receita gerada são minúsculas e, devido à falta de negócios, é difícil conseguir dinheiro real para se transformar em monero. Eles entendem que você pede mais dinheiro, mas queriam que eu informasse que estão tendo dificuldades para conseguir mais dinheiro. Agora têm acesso a 1,27 milhões de dólares em dinheiro, mas só estarão disponíveis na segunda-feira, uma vez que não podem enviar dinheiro com os bancos fechados.': {
                //step 1.1.2
                message: ['Sua última oferta é de US$ 1,27 milhão. Se concordarmos, quanto tempo você precisa para efetuar o pagamento?'],
                options: {
                  //1.1.2.1
                  'Sim, correto. Precisaremos de cerca de um dia, pois comprar Monero leva tempo, principalmente quando usamos uma corretora nos EUA': {
                    //step 1.1.2.1.2
                    message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                    success: false,
                    options: {
                    }
                  },
                  //1.1.2.2
                  'Não responder': {
                    //step 1.1.2.2
                    message: ['Você terá mais um dia antes que a publicação com seus dados ganhe o mundo.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //2.1
                      'Não responder': {
                        //step 2.1
                        message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                        success: false,
                        options: {
                        }
                      }
                    }
                  }
                }
              },
              //1.1.1
              'Você tem certeza de que meu cliente tem capacidade financeira para atender às suas demandas? Se você olhar os relatórios, bem como as notícias dos jornais, poderá facilmente ver que eles estão em sérios apuros.': {
                //step 1.1.1
                message: ['Se você realizou muitas negociações com o REvil, deve saber que empresas muito menores pagam mais do que a sua oferta.'],
                options: {
                  //1.1.1.1
                  'Bem, felizmente não foi o meu caso! Sim, confirmo que empreendi muitas negociações com afiliados do REvil e não esbarrei em nenhuma negociação com pagamento superior a 1 M. Há dois meses um afiliado do REvil atacou uma empresa italiana muito famosa. A solicitação inicial foi de 7,5 milhões de dólares, o negócio foi fechado por US$ 750 mil. Você pode perguntar aos afiliados do REvil se não estou falando a verdade.': {
                    //step 1.1.1.1
                    message: ['Não vou mais entrar em longas conversas e polêmicas. Você conhece os termos e condições e eles permanecerão inalterados.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento.': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //1.1.2.2
                      'Não responder.': {
                        //step 1.1.2.2
                        message: ['Você terá mais um dia antes que a publicação com seus dados ganhe o mundo.'],
                        options: {
                          //2.2.1.2.2.1
                          'Efetuar pagamento': {
                            //step 2.2.1.2.2.1
                            message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                            success: true,
                            options: {
                            }
                          },
                          //2.1
                          'Não responder': {
                            //step 2.1
                            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                            success: false,
                            options: {
                            }
                          }
                        }
                      }
                    }
                  },
                  //1.1.1.2
                  'A situação é a seguinte: 1- Meu cliente tem uma disponibilidade financeira muito limitada. 2- Ele já está trabalhando na restauração da rede. 3- O tempo necessário para restaurar a rede do zero será de quase 12 dias. 4- Há backups disponíveis em fitas LTO. 5- A perda do lucro por interrupção de negócios será limitada e coberta pela apólice de seguro.': {
                    //step 1.1.1.2
                    message: ['Tendo em conta esta situação, US$ 5 milhões são razoáveis.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento.': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //1.1.2.2
                      'Não responder.': {
                        //step 1.1.2.2
                        message: ['Você terá mais um dia antes que a publicação com seus dados ganhe o mundo.'],
                        options: {
                          //2.2.1.2.2.1
                          'Efetuar pagamento': {
                            //step 2.2.1.2.2.1
                            message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                            success: true,
                            options: {
                            }
                          },
                          //2.1
                          'Não responder': {
                            //step 2.1
                            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                            success: false,
                            options: {
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      //2
      'Oi, como você pode ajudar?': {
        //step 2 
        message: ['Olá, somos o Grupo REvil. Queremos informar que a rede local da sua empresa foi hackeada e criptografada. Temos todos os dados da sua rede local. O preço para desbloquear é de $ 3.000.000. Agora estamos mantendo isso em segredo, mas se você não nos responder dentro de 6 dias, será publicado em nosso site de notícias. Pense nos danos financeiros causados ​​por esta publicação ao preço das suas ações. Em caso de negociações bem-sucedidas, garantimos que você obterá decodificadores para todas as suas máquinas, remoção não recuperável dos dados baixados e relatório de segurança sobre como você foi hackeado para corrigir suas vulnerabilidades. Esperamos que você consiga avaliar corretamente os riscos para sua empresa. Você pode encontrar mais informações sobre o grupo REvil no Google. Postagens em nosso blog e posteriores publicações na mídia acarretarão prejuízos significativos para sua empresa: multas judiciais e governamentais, recuperação de dados, perda de reputação, abandono de clientes, queda de limites. Mas não entre em pânico! Estamos nos negócios, não na guerra. Podemos desbloquear seus dados e manter tudo em segredo. Tudo o que precisamos é de um resgate. Nesse caso, você também recebe: relatório de segurança, árvore completa de arquivos de dados comprometidos, exclusão permanente de dados baixados, suporte com dicas de desbloqueio e proteção.'],
        options: {
          //2.1
          'Babacas, não vou cair nessa!': {
            //step 2.1
            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
            success: false,
            options: {
            }
          },
          //2.2
          'Olá. Você criptografou nossa rede e estamos presos. Mas o valor no seu site deve ser um erro. Somos uma pequena empresa num estado muito rural que finalmente saiu do confinamento. Não há como pagarmos tanto. Existe algo diferente que possamos resolver?': {
            //step 2.2
            message: ['Olá, sabemos tudo sobre sua empresa. Meu chefe pode oferecer 20% de desconto.'],
            options: {
              //2.2.1
              'Obrigado por voltar. E obrigado por baixar o preço. Mas isso ainda é muito dinheiro. Se você conhece tudo sobre nossa empresa, sabe que as coisas não estão tão boas nos últimos cinco anos. Que documentos você tirou de nós?': {
                //step 2.2.1
                message: ['Preparamos uma prova de hack, você pode consultar seus arquivos aqui.....'],
                options: {
                  //2.2.1.1
                  'Não Responder.': {
                    //step 2.2.1.1
                    message: ['Você terá mais um dia até que a publicação com seus dados ganhe o mundo.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento.': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //1.1.2.1.2
                      'Não responder': {
                        //step 1.1.2.1.2
                        message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                        success: false,
                        options: {
                        }
                      }
                    }
                  },
                  //2.2.2.1
                  'Ok, falei com meu chefe. Nós realmente não queremos que você publique nada, mas temos medo de nunca conseguirmos fazer um acordo com você porque o preço é muito alto. Simplesmente não temos esse tipo de dinheiro. Aqui está o que temos. Primeiro, meu chefe cancelou a reabertura do escritório para o resto do ano, que estava prevista em US$ 30 mil. Acontece que temos uma apólice de seguro que também pode ajudar. (Eu não estava ciente disso). O seguro é de $ 100.000. Finalmente, meu chefe contribuirá pessoalmente com o dinheiro de sua própria família no valor de US$ 20.000. Isso é $ 150.000! Eu sei que não é tanto quanto você queria, mas por favor veja o que estamos fazendo aqui. Meu chefe também queria que eu pedisse que você olhasse os registros financeiros que você roubou de nós. Ele queria que eu lhe dissesse que se você olhar esses documentos, eles mostram que nossa empresa tem um “valor de lucro negativo”. Não sei o que isso significa, mas meu chefe disse que, como empresário, você entenderia': {
                    //step 2.2.2.1
                    message: ['300 mil e tudo bem, se você pagar rapidamente.'],
                    options: {
                      //2.2.1.2.2
                      'Nossa, isso é incrível. Estamos muito gratos pelo enorme desconto. Queremos deixar isso para trás o mais rápido possível. Pode enviar os dados para pagamento.': {
                        //step 2.2.1.2.2
                        message: ['OK, seguem informações para pagamento....'],
                        options: {
                          //2.2.1.2.2.1
                          'Efetuar pagamento.': {
                            //step 2.2.1.2.2.1
                            message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                            success: true,
                            options: {
                            }
                          },
                          //1.1.2.1.2
                          'Não responder.': {
                            //step 1.1.2.1.2
                            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                            success: false,
                            options: {
                            }
                          }
                        }
                      },
                      //2.2.1.1
                      'Nossa, isso é incrível. Estamos muito gratos pelo enorme desconto. Queremos deixar isso para trás o mais rápido possível. Provavelmente podemos conseguir US$ 300.000, mas não temos isso hoje. Provavelmente conseguiríamos recebê-lo até segunda-feira. Se você quiser algo hoje, sei que temos exatamente US$ 264.766 porque estou vendo um e-mail agora. Podemos conseguir $ 264.766. Se você realmente precisa de US$ 300 mil, levará mais algum tempo. Podemos pagar a você os US$ 264.766 nas próximas 24 horas e acabar com isso.': {
                        //step 2.2.1.1
                        message: ['Você terá mais um dia até que a publicação com seus dados ganhe o mundo.'],
                        options: {
                          //2.2.1.2.2.1
                          'Efetuar pagamento.': {
                            //step 2.2.1.2.2.1
                            message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                            success: true,
                            options: {
                            }
                          },
                          //1.1.2.1.2
                          'Não responder': {
                            //step 1.1.2.1.2
                            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
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
              //2.2.2
              'Pedimos desculpas pela demora. Estamos trabalhando para conseguir uma oferta para você, mas no momento estamos lutando para conseguir o dinheiro para deixá-lo feliz. Não queremos insultá-los com um número baixo, mas como mencionei... as coisas não têm estado tão boas nos últimos anos. Como você sabe tudo sobre nós, você sabe que isso é verdade. Nós lhe daremos algo para lhe oferecer amanhã logo cedo. Tudo bem?': {
                //step 2.2.2
                message: ['Nós esperamos.'],
                options: {
                  //2.2.2.1
                  'Ok, falei com meu chefe. Nós realmente não queremos que você publique nada, mas temos medo de nunca conseguirmos fazer um acordo com você porque o preço é muito alto. Simplesmente não temos esse tipo de dinheiro. Aqui está o que temos. Primeiro, meu chefe cancelou a reabertura do escritório para o resto do ano, que estava prevista em US$ 30 mil. Acontece que temos uma apólice de seguro que também pode ajudar. (Eu não estava ciente disso). O seguro é de $ 100.000. Finalmente, meu chefe contribuirá pessoalmente com o dinheiro de sua própria família no valor de US$ 20.000. Isso é $ 150.000! Eu sei que não é tanto quanto você queria, mas por favor veja o que estamos fazendo aqui. Meu chefe também queria que eu pedisse que você olhasse os registros financeiros que você roubou de nós. Ele queria que eu lhe dissesse que se você olhar esses documentos, eles mostram que nossa empresa tem um “valor de lucro negativo”. Não sei o que isso significa, mas meu chefe disse que, como empresário, você entenderia.': {
                    //step 2.2.2.1
                    message: ['300 mil e tudo bem, se você pagar rapidamente.'],
                    options: {
                      //2.2.1.2.2
                      'Nossa, isso é incrível. Estamos muito gratos pelo enorme desconto. Queremos deixar isso para trás o mais rápido possível. Pode enviar os dados para pagamento.': {
                        //step 2.2.1.2.2
                        message: ['OK, seguem informações para pagamento....'],
                        options: {
                          //2.2.1.2.2.1
                          'Efetuar pagamento.': {
                            //step 2.2.1.2.2.1
                            message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                            success: true,
                            options: {
                            }
                          },
                          //1.1.2.1.2
                          'Não responder.': {
                            //step 1.1.2.1.2
                            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                            success: false,
                            options: {
                            }
                          }
                        }
                      },
                      //2.2.1.1
                      'Nossa, isso é incrível. Estamos muito gratos pelo enorme desconto. Queremos deixar isso para trás o mais rápido possível. Provavelmente podemos conseguir US$ 300.000, mas não temos isso hoje. Provavelmente conseguiríamos recebê-lo até segunda-feira. Se você quiser algo hoje, sei que temos exatamente US$ 264.766 porque estou vendo um e-mail agora. Podemos conseguir $ 264.766. Se você realmente precisa de US$ 300 mil, levará mais algum tempo. Podemos pagar a você os US$ 264.766 nas próximas 24 horas e acabar com isso.': {
                        //step 2.2.1.1
                        message: ['Você terá mais um dia até que a publicação com seus dados ganhe o mundo.'],
                        options: {
                          //2.2.1.2.2.1
                          'Efetuar pagamento.': {
                            //step 2.2.1.2.2.1
                            message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                            success: true,
                            options: {
                            }
                          },
                          //1.1.2.1.2
                          'Não responder': {
                            //step 1.1.2.1.2
                            message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                            success: false,
                            options: {
                            }
                          }
                        }
                      }
                    }
                  },
                  //2.2.1.1
                  'Não responder.': {
                    //step 2.2.1.1
                    message: ['Você terá mais um dia até que a publicação com seus dados ganhe o mundo.'],
                    options: {
                      //2.2.1.2.2.1
                      'Efetuar pagamento.': {
                        //step 2.2.1.2.2.1
                        message: ['Aguardando confirmações da rede Monero.', 'Para usar um descriptografador, execute-o como administrador e desligue o antivírus antes. Você pode usar um descriptografador como aplicativo GUI ou através do cmd. Comandos CMD: dec.exe -full dec.exe -path "C:\folder" dec.exe -file "C:\folder\file.txt.random_ext" * decryptor com a opção -full irá descriptografar todos com parâmetros padrão. Como funciona: 1. Descriptografador procurando arquivo criptografado 2. criando backup do arquivo 3. descriptografando o arquivo 4. removendo o backup 5. procurando um próximo arquivo e repetindo o loop. Basta baixá-lo e usá-lo em qualquer sistema com direitos de administrador,'],
                        success: true,
                        options: {
                        }
                      },
                      //1.1.2.1.2
                      'Não responder': {
                        //step 1.1.2.1.2
                        message: ['Olá, não vemos nenhuma tentativa de sua parte de iniciar uma conversa séria. Seus arquivos foram publicados no blog e repassados para a mídia, o restante dos dados será vendido. Em qualquer caso, isso afetará sua reputação, pense em seus clientes, multas e outros problemas que o aguardam. '],
                        success: false,
                        options: {
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  '': {
    message: [], options: {
      "Não tenho interesse em um acordo.": {

      },
      "Tenho interesse no acordo.": {

      }
    }
  }
}

// message: [''],
// options: {
// }