const tabMenus = document.querySelector('.tabMenus');
const slider = document.querySelector('.slider');
const ulTag = document.getElementsByClassName('ul')[0] ;


const tabs = ["All Posts(32)","Article","Event","Education","Job"]

// for posts
const handleClick = (event) =>{
    clickedID = event.target.id;
    //console.log(clickedID)
    const clickedTag = document.getElementById(clickedID);

    const clickedTagWidth = clickedTag.offsetWidth;
    //console.log(clickedTagWidth)

    const clickedTagLeft = clickedTag.offsetLeft;
    //console.log(clickedTagLeft)
    slider.style.width = clickedTagWidth + 'px';
    slider.style.transform = ` translateX(${clickedTagLeft}px) ` ;
}

for(let i=0 ; i<tabs.length ;i++){
    const liTag = document.createElement('li');
    liTag.append(tabs[i]);
    liTag.id = i;
    liTag.addEventListener('click',handleClick);
    ulTag.append(liTag);
    if(i === 0){
        slider.style.width = liTag.offsetWidth + 'px';
    }
}

//for edit/report menu
const ellipsis1 = document.getElementsByClassName('edit')[0];
const ellipsis2 = document.getElementsByClassName('edit')[1];
const ellipsis3 = document.getElementsByClassName('edit')[2];
const ellipsis4 = document.getElementsByClassName('edit')[3];

const collapseBox1 = document.getElementsByClassName('editCollapse')[0];
const collapseBox2 = document.getElementsByClassName('editCollapse')[1];
const collapseBox3 = document.getElementsByClassName('editCollapse')[2];
const collapseBox4 = document.getElementsByClassName('editCollapse')[3];

const eventHandler = (name,box) =>{
    name.addEventListener('click',()=>{
        if(name.classList.contains('clicked')){
            name.classList.remove('clicked')
            box.style = ` opacity:0;`
        }else{
            name.classList.add('clicked')
            box.style = ` opacity:1;`
        }
    })
}

eventHandler(ellipsis1,collapseBox1)
eventHandler(ellipsis2,collapseBox2)
eventHandler(ellipsis3,collapseBox3)
eventHandler(ellipsis4,collapseBox4)

//follow buttons
const ulFollow = document.querySelector('.ulFollow');
const followBtn = ['Follow','Follow','Follow','Follow'];
const userBtn = document.querySelector('.userBtn');
const leaveBtn = document.querySelector('.leaveBtn');
const followsGP  =document.querySelector('.followsGP');

const showHide = (emitter,target) =>{
    emitter.addEventListener('click',()=>{
        if(emitter.classList.contains('emitted')){
            emitter.classList.remove('emitted')
            target.style.display = "none"
        }else{
            emitter.classList.add("emitted")
            target.style.display = "block"
        }
    })
}
showHide(userBtn,followsGP)


const handleFollow=(e)=>{
    clickedFollowID = e.target.id;
   
    clickedFollow = document.getElementById(clickedFollowID)
    console.log(clickedFollow)
    if(clickedFollow.classList.contains('contain')){
        clickedFollow.classList.remove('contain')
        clickedFollow.innerText = 'Follow'
        clickedFollow.style = `background-color: rgb(155, 154, 154,0.5);`
        userBtn.style.display = "block"
        leaveBtn.style.display = "none"
    }else{
        clickedFollow.classList.add('contain')
        clickedFollow.innerText = 'Followed'
        clickedFollow.style = `background-color:black;`
        userBtn.style.display = "none"
        leaveBtn.style.display = "block" 
    }
}

for (let i = 0;i<followBtn.length;i++){
    const li = document.createElement('li')
    li.append(followBtn[i])
    li.classList.add(`liFollow${i}`)
    li.id = i+5
    li.addEventListener('click',handleFollow)
    ulFollow.append(li)
    
}


//for login Acc

const loginSession = document.querySelector('.login')
const loginBtn = document.querySelector('.toLoginBtn');
const createAccBtn =document.querySelector('.toCreateAcc');
const createAccBtn1 =document.querySelector('.toCreateAcc1');
const closeBtn = document.querySelector('.closeLogin');

const loginOut = (emitter,target,string) =>{
    emitter.addEventListener('click',()=>{
        target.style.display = string
    })
}

loginOut(loginBtn,loginSession,"block")
loginOut(closeBtn,loginSession,"none")


//for createAcc
const closeCreate = document.querySelector('.closeCreate')
const createSession =  document.querySelector('.create')
const createBtn = document.querySelector('.createNewAcc')
const loginBtn1 = document.querySelector('.toLoginBtn1');
const signInBtn = document.querySelector('.signInAcc')


const loginCreate = (emitter,target1,target2,value1,value2) =>{
    emitter.addEventListener('click',()=>{
        target1.style.display = value1;
        target2.style.display = value2
    })
}
loginOut(createAccBtn,createSession,"block")
loginOut(createAccBtn1,createSession,"block")
loginOut(closeCreate,createSession,"none")
loginOut(loginBtn1,loginSession,"block")
loginCreate(createBtn,loginSession,createSession,"none","block")
loginCreate(signInBtn,loginSession,createSession,"block","none")