# 04 - Cisco Packet Tracer Passo a Passo

## Objetivo

Simular toda a rede do restaurante Sabor & Alma e provar que as politicas de conectividade e seguranca funcionam.

## Preparacao

1. Criar pasta para versoes do projeto .pkt.
2. Nomear ficheiro inicial: sabor-alma-rede-v1.pkt.
3. Definir legenda de cores para cada VLAN.

## Passo 1 - Montagem fisica

1. Inserir Router, Firewall, Switch Core PoE, 2 APs e terminais.
2. Ligar os equipamentos com cabos corretos.
3. Nomear cada equipamento (SW-CORE, FW-EDGE, AP-ENTRADA, AP-SALA).

## Passo 2 - Configuracao de VLAN no switch

1. Criar VLAN 10, 20, 30, 40, 50, 99.
2. Portas access conforme tabela do projeto:
	- G1/0/4 e G1/0/5: VLAN 20 (POS).
	- G1/0/6: VLAN 10 (PC admin).
	- G1/0/7: VLAN 30 (impressora cozinha).
	- G1/0/8: VLAN 50 (servidor/intranet).
3. Portas trunk:
	- G1/0/1: trunk para firewall.
	- G1/0/2 e G1/0/3: trunk para APs (VLAN 30 e 40).
4. Guardar configuracao.

## Passo 3 - Routing entre VLAN (router-on-a-stick)

1. Criar subinterfaces com os gateways definidos.
2. Ativar DHCP por VLAN (exceto VLAN 99).

Exemplo de enderecamento:

- VLAN 10: 192.168.10.1/24
- VLAN 20: 192.168.20.1/24
- VLAN 30: 192.168.30.1/24
- VLAN 40: 192.168.40.1/24
- VLAN 50: 192.168.50.1/24
- VLAN 99: 192.168.99.1/24

## Passo 4 - Politicas de seguranca (ACL)

1. Negar acesso de Guest (VLAN 40) para VLAN 10, 20, 50 e 99.
2. Permitir Guest apenas para Internet (HTTP/HTTPS/DNS).
3. Limitar POS (VLAN 20) ao gateway de pagamento (TCP 443) e DNS/NTP.
4. Permitir operacao (VLAN 30) para servidores internos (VLAN 50).

## Passo 5 - WiFi

1. Criar SSID Staff: SaborAlma-Staff (VLAN 30).
2. Criar SSID Guest: SaborAlma-Guest (VLAN 40).
3. WPA2/WPA3 com senha forte.
4. Simular portal cativo (pagina de boas-vindas com botao de acesso).

## Passo 6 - Testes tecnicos

1. Ping dentro da mesma VLAN (deve funcionar).
2. Ping de Guest para POS (deve falhar).
3. Acesso de Guest a Internet (deve funcionar).
4. Acesso de Staff a servidor interno (deve funcionar).
5. Validar 50 dispositivos simulados na VLAN 40.

## Evidencias obrigatorias

1. Captura da topologia completa.
2. Captura das VLAN no switch.
3. Captura das ACL/regras.
4. Captura dos testes de sucesso e bloqueio.

## Boas praticas

1. Salvar versao a cada marco: v1, v2, v3.
2. Evitar alterar varios blocos sem snapshot.
3. Registar o que foi mudado em cada versao.
