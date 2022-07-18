![](https://i.imgur.com/xG74tOh.png)

# Exercício 05

## Alarme 2.0

Agora vamos melhorar o nosso alarme da questão anterior! E para isso vamos implementar a `soneca`.

Após iniciar o seu programa, ele deverá esperar o horário correto para despertar, ou seja, quando o horário atual for igual ao horário atribuído a variável `alarme` o seu programa deverá mostrar repetidamente a mensagem "`Beep beep!`", uma mensagem a cada segundo, até que o tempo da variável `tempoAlarmandoEmSegundos` se esgote.

Em seguida, seu programa deverá mostrar a mensagem "`Soneca ativada, próximo alarme às: HH:mm:ss`", onde `HH:mm:ss` representa o novo horário já contabilizando o tempo da soneca (ou seja, após passar o tempo da soneca em segundos que foi atribuído a variável `tempoSonecaEmSegundos`) em que seu programa irá despertar. Você decidirá se o programa continuará repetindo o processo até que sejam pressionadas as teclas Ctrl + c no teclado ou se o programa finalizará após o despertar da primeira soneca acionada.

Exemplo:

```javascript
let alarme = "18:45:00";
let tempoAlarmandoEmSegundos = 10;
let tempoSonecaEmSegundos = 10;
```

Para os valores atribuídos as variáveis acima, às 18:45:00 do seu computador o seu programa deverá imprimir:

-   Para apenas uma soneca ativada:
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
Soneca ativada, próximo alarme às: 18:45:20
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

-   Para soneca ativada até que sejam pressionadas as teclas Ctrl + c no teclado:
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
Soneca ativada, próximo alarme às: 18:45:20
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
Soneca ativada, próximo alarme às: 18:45:40
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
Soneca ativada, próximo alarme às: 18:46:00
Beep beep!
Beep beep!
(...)

E assim por diante até que sejam pressionadas as teclas Ctrl + c no teclado
```

Dica: Utilizar `setTimeout()`, `setInterval()` e o `format` e `add` do `date-fns`.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício de classe` `nodeJS` `JavaScript`
