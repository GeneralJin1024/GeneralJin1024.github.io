!function () {
    var cssCode = window.cssCode = `
/*An interesting Auto-Resume Builder*/
*{
	transition: all 0.5s;
}
/*Let's change the background*/
html{
	background-color: blanchedalmond;
}
/*Have a border container*/
#code{
    border-left: 0.1rem #5C5CB4 solid;
    border-right: 0.1rem #5C5CB4 solid;
    border-bottom: 0.3rem #3D384B solid;
    border-radius: 1rem;
    background-color: rgb(50, 50, 50);
    padding: 20px;
}

/*Highlight the code is crucial*/
#code{
    color: rgb(248,248,242);
}
.token.selector{
    color: rgb(228, 183, 86);
}
.token.property{
    color: rgb(19, 193, 236);
}
.token.punctuation{
    color: rgb(248,248,242);
}
.token.function{
    color: rgb(250,250,210);
}
.token.comment{
    color: rgb(109,188,65);
}

/*Here comes the animation*/
#code{
    animation: breath 4s linear infinite;
}
/*Now start writing*/
/*Oh Wait! Where's my paper?*/
`;
    var htmlCode = window.htmlCode = `
#code{
    display: inline-block;
    width: 45%;
    height: 98%;
    transform: translateX(125%);
    position: absolute;
}

#paper{
    position: absolute;
    left: 10px;
    width: 50%;
    height: 98%;
    background: #fff;
    padding: 20px;
    margin-left: 20px;
    border-left: 0.1rem #5C5CB4 solid;
    border-right: 0.1rem #5C5CB4 solid;
    border-bottom: 0.3rem #3D384B solid;
    border-radius: 1rem;
    text-shadow: 0 1px 0 #F6EF97;
}

/*HaHa, here it is!*/
`;
var markdown = window.markdown = `

# Resume

### Introduction

   - **Name**：Shengyu(Jeff) Jin
   - **Gender**：Male
   - **Birth**：1998
   - **Location**: Columbus, Ohio, US
   - **Target Position**：Software Enginner, Game Developer

### Contact：

   - **Phone**：+1-714-454-8583, +86-13818922312	
   - **Mail**：jsy729574257@Gmail.com
   - **WeChat**：jf2655698979
   - **LinkedIn**: https://www.linkedin.com/in/shengyu-jin1024/

### Academic Path

   - **The Ohio State University**
    - **Computer and Information Science Major**

### Skills

   - **Java**
   - **C++**
   - **Android** 
   - **javascript** 
   - **C#**
   - **Unity3D**

### projects

   - **project demo1[1]**
   - **project demo2[2]**
   - **project demo3[3]**

`;
    var changeCode = window.changeCode = `
/*Terrible text style？ Don't worry I'll fix it in a second*/
`;
    var conclusion = window.conclusion = `
/*Now it follows a .md format but not we have not finished yet*/
`
}.call();
