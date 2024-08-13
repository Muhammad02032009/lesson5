# Lecture 2
$$ About -Scope
$$
### What  is scope in Java Script ?
* __Scope__ - это текущий контекст выполнения, в котором значения и выражения “видимы” или могут быть доступны. Если переменная или выражение не находятся в текущей области видимости, они не будут доступны для использования. Области видимости также могут быть иерархически структурированы, поэтому дочерние области видимости имеют доступ к родительским областям видимости, но не наоборот.

___
### There are  `4` kind of scopes :
>1. __Global  scope -->__ Область видимости по умолчанию для всего кода, выполняемого в режиме скрипта. 

```javascript
const me ="jonas";
const job='teacher';
```
___
>2.__Function scope -->__ Область видимости, созданная функцией.

```javascript
function myFunction() {
  let localVar = "Это локальная переменная!";
  console.log(localVar); // Вывод: Это локальная переменная!
}
```
___
>3.__Block scope -->__ Эта область видимости ограничивает доступ к переменной, объявленной внутри определенного блока, извне этого блока.


```javascript
if (true) {
  let blockVar = "Это переменная внутри блока!";
  console.log(blockVar); // Вывод: Это переменная внутри блока!
}
```
___

### Hosting 
* Хостинг — это механизм JavaScript, при котором объявления переменных и функций перемещаются в начало области видимости перед выполнением кода.

  Хостинг в JavaScript — это поведение, при котором функция или переменная могут использоваться до объявления.


    * hosting hangomi ` functiondeclaretion `  va ` var ` ba amal meoyad vale dar holati ` var `  budan qimmati on underfaind meshavad
    * dar ` const ` va ` let ` on ba ` temperal dead zone ` meaftad to on dame ki on dar scophoi khud naboshad

  ___
![alt text](<Снимок экрана 2024-08-10 105607.png>)




