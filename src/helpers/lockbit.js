const step0 = {
  //step 0
  message: ['user_response: Gostaríamos de recuperar seus arquivos, etc. Quais são suas instruções para recuperar nossos dados?', 'Olá, o preço para toda a sua rede é de 100 mil dólares.', 'Temos mailbox.edb e todos os arquivos de seus usuários. Se você não pagar, iremos publicá-los, leve em consideração que não temos o que fazer com eles.'],
  options: {
    //1
    'Olá, consultei este número e esta não é uma oferta realista. Temos backup e podemos restaurar, isso vai levar algum tempo e dinheiro. Estamos dispostos a pagar 5k.': {
    },
    //2
    'Não responder.': {
    }
  }
}
const step1 = {
  //step 1
  message: ['Se você tem backup, por que está aqui? Eu mesmo apaguei seu NAS...'],
  options: {
    //1.1
    'Temos arquivos de backup mais antigos em dispositivos externos.': {
    },
    //2
    'Não responder': {
    }
  }
}
const step1_1 = {
  //step 1.1
  message: ['Venha com uma oferta melhor do que 5k.'],
  options: {
    //1.1.1
    'Tenho que consultar mas acho que não vão aceitar nada superior.': {
    },
    //1.1.2
    'Essa é nossa oferta final.': {
    }
  }
}
const step1_1_1 = {
  //step 1.1.1
  message: ['Você é da empresa de TI? Eles contrataram você para falar conosco ou o quê?'],
  options: {
    //1.1.1.1
    'Somos o time de TI.': {
    },
    //1.1.1.2
    'Somos consultores contratados para negociar.': {
    }
  }
}
const step1_1_1_1 = {
  //step 1.1.1.1
  message: ['Como dissemos, sem intermediários.. no passado eles ferraram com nossos negociadores.'],
  options: {
    //1.1.1.1.1
    'Podemos pagar 6k, isso é o máximo, não podemos pagar mais.': {
    },
    //1.1.1.1.2
    'Não responder.': {
    }
  }
}
const step1_1_1_1_1 = {
  //step 1.1.1.1.1
  message: ['6K não vai rolar.'],
  options: {
    //1.1.1.1.1.1
    'Passe uma demanda real.': {
    },
    //1.1.1.1.1.2
    'Oferta final: 10k ou começaremos a restaurar o backup externo. Você pode responder até às 15h30 CEST.': {
    }
  }
}
const step1_1_1_1_1_1 = {
  //step 1.1.1.1.1.1
  message: ['O valor mais baixo que podemos oferecer é 60k. Tenha um bom dia.'],
  options: {
    //1.1.1.1.1.1.1
    'Beleza mano, vou restaurar meu backup, boa sorte.': {
    },
    //1.1.1.1.1.1.2
    'Não responder.': {
    },
    //1.1.1.1.1.1.3
    'Ok, vamos aceitar 60K.': {
    }
  }
}
const step1_1_1_1_1_1_1 = {
  //step 1.1.1.1.1.1.1
  message: ['Ok, 15k euros.'],
  options: {
    //1.1.1.1.1.1.1.1
    'Ok, vamos aceitar.': {

    },
    //1.1.1.1.1.1.2
    'Não responder.': {

    }
  }
}
const step1_1_1_1_1_1_1_1 = {
  //step 1.1.1.1.1.1.1.1
  message: ['Segue arquivo para decriptografia.'],
  success: true,
  options: {
  }
}
const step1_1_1_1_1_1_2 = {
  //step 1.1.1.1.1.1.2
  message: ['Não estamos falando sobre vender seus dados. Colocaremos em nosso blog gratuitamente para todos, caso você não pague. Você está negociando há muito tempo e isso não ajuda você. Sabemos que você está atrasando especificamente as negociações para que concordemos com um valor menor. Pelo contrário, se pagar rapidamente podemos dar-lhe um desconto pela rapidez.'],
  options: {
    //1.1.1.1.1.1.3
    'Ok, vamos aceitar 60K': {
    },
    //1.1.1.1.1.1.2.2
    'Não responder.': {
    }
  }
}
const step1_1_1_1_1_1_3 = {
  //step 1.1.1.1.1.1.3
  message: ['Segue arquivo para decriptografia.'],
  success: true,
  options: {
  }
}
const step1_1_1_1_1_1_2_2 = {
  //step 1.1.1.1.1.1.2.2
  message: [],
  success: true,
  options: {
  }
}
const step1_1_1_1_1_2 = {
  //step 1.1.1.1.1.2
  message: ['O valor mais baixo que podemos oferecer é 60k. Tenha um bom dia.'],
  options: {
    //1.1.1.1.1.1.1
    'Beleza mano, vou restaurar meu backup, boa sorte.': {
    },
    //1.1.1.1.1.1.2
    'Não responder.': {
    }
  }
}

const step1_1_1_1_2 = {
  //step 1.1.1.1.2
  message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
  success: false,
  options: {
  }
}

const step1_1_1_2 = {
  //step 1.1.1.2
  message: ['Vocês ferram nosso négocio.'],
  options: {
    //1.1.1.1.2
    'Consultei o cliente e ele pode pagar 6k, isso é o máximo, não pode pagar mais.': {
    },
    //2.2
    'Não responder.': {
    }
  }
}
const step1_1_2 = {
  //step 1.1.2
  message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
  success: false,
  options: {
  }
}
const step2 = {
  //step 2
  message: ['Estamos preparando um post para publicar seus dados na Internet.'],
  options: {
    //2.1
    'Então, estamos aqui porque levará algum tempo para restaurá-los e inserir os dados ausentes.': {
    },
    //2.2
    'Não responder.': {
    }
  }
}
const step2_2 = {
  //step 2.2
  message: ['Então, não queremos mais negociar, boa sorte com seu backup, vamos publicar informações pessoais de seus clientes e funcionários e vender suas credencias na Dark Web.'],
  success: false,
  options: {
  }
}
const step2_1 = {
  //step 2.1
  message: ['Venha com uma oferta melhor do que 5k.'],
  options: {
    //1.1.1
    'Olá, consultei este número e esta não é uma oferta realista. Temos backup e podemos restaurar, isso vai levar algum tempo e dinheiro. Estamos dispostos a pagar 5k.': {
    },
    //1.1.2
    'Não responder.': {
    }
  }
}

// const step = {
//     //step 
//     message: [''],
//     options: {
//         //
//         '': {
//         },
//         //
//         '': {
//         }
//     }
// }
export const Lockbit = {
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
                                    'Não responder.': {
                                      //step 1.1.1.1.1.1.2.2
                                      message: [],
                                      success: true,
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
                                'Não responder.': {
                                  //step 1.1.1.1.1.1.2.2
                                  message: [],
                                  success: true,
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
                                    'Não responder.': {
                                      //step 1.1.1.1.1.1.2.2
                                      message: [],
                                      success: true,
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
                                'Não responder.': {
                                  //step 1.1.1.1.1.1.2.2
                                  message: [],
                                  success: true,
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
                                        'Não responder.': {
                                          //step 1.1.1.1.1.1.2.2
                                          message: [],
                                          success: true,
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
                                    'Não responder.': {
                                      //step 1.1.1.1.1.1.2.2
                                      message: [],
                                      success: true,
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
                                        'Não responder.': {
                                          //step 1.1.1.1.1.1.2.2
                                          message: [],
                                          success: true,
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
                                    'Não responder.': {
                                      //step 1.1.1.1.1.1.2.2
                                      message: [],
                                      success: true,
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
                                    'Não responder.': {
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
                                'Não responder.': {
                                  //step 1.1.1.1.1.1.2.2
                                  message: [],
                                  success: true,
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
                                    'Não responder.': {
                                      //step 1.1.1.1.1.1.2.2
                                      message: [],
                                      success: true,
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
                                'Não responder.': {
                                  //step 1.1.1.1.1.1.2.2
                                  message: [],
                                  success: true,
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
}