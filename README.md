Função de validação dos códigos de rastreamento dos Correios conferindo pelos dois últimos dígitos numéricos (dígitos verificadores)

Convertido da seguinte fóruma do Excel fornecida pelo usuário "HugoSoliz" no fórum DevMedia:

=VALOR(CONCATENAR(N2;SE(MOD(EXT.TEXTO(N2;1;1)*8+EXT.TEXTO(N2;2;1)*6+EXT.TEXTO(N2;3;1)*4+EXT.TEXTO(N2;4;1)*2+EXT.TEXTO(N2;5;1)*3+EXT.TEXTO(N2;6;1)*5+EXT.TEXTO(N2;7;1)*9+EXT.TEXTO(N2;8;1)*7;11)=0;5;SE(MOD(EXT.TEXTO(N2;1;1)*8+EXT.TEXTO(N2;2;1)*6+EXT.TEXTO(N2;3;1)*4+EXT.TEXTO(N2;4;1)*2+EXT.TEXTO(N2;5;1)*3+EXT.TEXTO(N2;6;1)*5+EXT.TEXTO(N2;7;1)*9+EXT.TEXTO(N2;8;1)*7;11)= 1;0;11-MOD(EXT.TEXTO(N2;1;1)*8+EXT.TEXTO(N2;2;1)*6+EXT.TEXTO(N2;3;1)*4+EXT.TEXTO(N2;4;1)*2+EXT.TEXTO(N2;5;1)*3+EXT.TEXTO(N2;6;1)*5+EXT.TEXTO(N2;7;1)*9+EXT.TEXTO(N2;8;1)*7;11)))))
