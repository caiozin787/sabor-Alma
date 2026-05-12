# 03 - Projeto de Rede Estruturada

## Objetivo

Definir uma rede segura, escalavel e simples de manter para operacao do restaurante Sabor & Alma.

## Arquitetura recomendada

1. Topologia em estrela: ISP -> Router -> Firewall -> Switch Core PoE no bastidor.
2. APs ligados ao switch PoE.
3. POS, PC e impressoras ligados por cabo.
4. Tablets e clientes por WiFi.
5. WiFi Guest com portal cativo para acesso ao menu digital.

## Diagrama logico (mermaid)

```mermaid
flowchart LR
	ISP((ISP)) --> RTR[Router]
	RTR --> FW[Firewall/UTM]
	FW --> SW[Switch Core PoE]

	SW --> AP1[AP-ENTRADA]
	SW --> AP2[AP-SALA]
	SW --> POS[POS]
	SW --> PC[PC Admin]
	SW --> PRN[Impressora Cozinha]
	SW --> SRV[Servidor/Intranet]

	AP1 -->|SSID Staff (VLAN 30)| TS1[Tablets Staff]
	AP2 -->|SSID Guest (VLAN 40)| G1[Clientes WiFi]
```

## Segmentacao por VLAN

1. VLAN 10 - Gestao/Admin.
2. VLAN 20 - POS/Pagamentos.
3. VLAN 30 - Operacao (tablets de pedidos).
4. VLAN 40 - Guest WiFi (clientes).
5. VLAN 50 - Servicos internos (servidor/intranet).
6. VLAN 99 - Management de rede.

## Plano IP

| VLAN | Subrede | Gateway | DHCP (exemplo) |
|---|---|---|---|
| 10 - Gestao | 192.168.10.0/24 | 192.168.10.1 | 192.168.10.50-192.168.10.150 |
| 20 - POS | 192.168.20.0/24 | 192.168.20.1 | 192.168.20.50-192.168.20.80 |
| 30 - Operacao | 192.168.30.0/24 | 192.168.30.1 | 192.168.30.50-192.168.30.120 |
| 40 - Guest | 192.168.40.0/24 | 192.168.40.1 | 192.168.40.50-192.168.40.200 |
| 50 - Servicos | 192.168.50.0/24 | 192.168.50.1 | 192.168.50.10-192.168.50.50 |
| 99 - Management | 192.168.99.0/24 | 192.168.99.1 | 192.168.99.10-192.168.99.20 |

## Tabela de portas (switch core)

| Porta | Funcao | VLAN |
|---|---|---|
| G1/0/1 | Trunk para Firewall | 10,20,30,40,50,99 |
| G1/0/2 | AP-ENTRADA | 30,40 |
| G1/0/3 | AP-SALA | 30,40 |
| G1/0/4 | POS | 20 |
| G1/0/5 | POS reserva | 20 |
| G1/0/6 | PC admin | 10 |
| G1/0/7 | Impressora cozinha | 30 |
| G1/0/8 | Servidor/Intranet | 50 |
| G1/0/9 | Management (switch) | 99 |
| G1/0/10 | Reserva futura | 10 |

## Politicas de seguranca minimas

1. Guest (VLAN 40) sem acesso a VLAN 10, 20, 50 e 99.
2. POS (VLAN 20) so comunica com gateway de pagamento (TCP 443) e DNS/NTP.
3. Operacao (VLAN 30) acessa apenas servicos internos (VLAN 50) e Internet.
4. Gestao (VLAN 10) com acesso administrativo restrito.
5. Firewall com bloqueio de categorias de risco e conteudo improprio na rede Staff.
6. WPA2/WPA3 com senha forte e rotacao periodica.
7. Controlo de banda na rede Guest para reduzir streaming e downloads pesados.

## Lista de regras/ACL (resumo)

1. Deny: VLAN 40 -> VLAN 20/50/10/99 (any).
2. Permit: VLAN 40 -> Internet (HTTP/HTTPS/DNS).
3. Deny: VLAN 20 -> any (exceto gateway pagamento 198.51.100.10:443, DNS/NTP).
4. Permit: VLAN 30 -> VLAN 50 (HTTP/HTTPS/SMB conforme necessidade).
5. Permit: VLAN 10 -> VLAN 99 (SSH/HTTPS de administracao).

## Infraestrutura passiva

1. Cablagem Cat6 para melhor desempenho e robustez em ambiente de cozinha.
2. Patch panel no rack.
3. Tomadas RJ45 etiquetadas.
4. Patch cords curtos e organizacao de cabos.
5. UPS para equipamentos criticos.

## Requisitos obrigatorios do projeto

- [ ] Cobertura WiFi minima de -65 dBm em todas as areas de clientes.
- [ ] Isolamento da rede POS em relacao a rede publica.
- [ ] Servidor de gestao inacessivel via rede Guest.
- [ ] Rede dimensionada para pelo menos 50 dispositivos simultaneos.

## Entregaveis tecnicos desta fase

1. Diagrama fisico da rede.
2. Diagrama logico (VLAN e fluxos).
3. Tabela de enderecamento.
4. Tabela de portas do switch.
5. Lista de ACL/regras de firewall.
