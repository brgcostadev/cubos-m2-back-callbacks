![](https://i.imgur.com/xG74tOh.png)

# Exercício 04

## Alarme

Desenvolva um programa que simula um alarme simples. A partir do momento em que esta rodando, seu programa irá aguardar até que o horário especificado na variável `alarme` chegue, só então irá despertar (por um determinado período em segundos) e finalizar sua execução.

Após iniciar o seu programa, ele deverá esperar o horário correto para despertar, ou seja, quando o horário atual for igual ao horário atribuído a variável `alarme` o seu programa deverá mostrar repetidamente a mensagem "`Beep beep!`", uma mensagem a cada segundo, até que o tempo da variável `tempoAlarmandoEmSegundos` se esgote. Só então o programa é finalizado.

O horário precisa estar no seguinte formato: `HH:mm:ss`

Exemplo:

```javascript
const alarme = "18:45:00";
let tempoAlarmandoEmSegundos = 10;
```

Para os valores atribuídos as variáveis acima, às 18:45:00 do seu computador o seu programa deverá imprimir:

```
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
```

Dica: Utilizar `setTimeout()`, `setInterval()` e o `format` do `date-fns`.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [X] Resolver o exercício revendo a aula se necessário
-   [X] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [X] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [X] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício de classe` `nodeJS` `JavaScript`
