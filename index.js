
function addpop() {
    document.getElementById("smallbox").style.display="block";
    document.getElementById("para").style.display="none";
    document.getElementById("icon").style.display="none";
    document.getElementById("xyz").style.filter="blur(5px)"
    document.getElementById("child1").style.filter="blur(5px)"
}

const task=[]

const addlist = () => {
    document.getElementById("smallbox").style.display="none";
    const name=document.getElementById("card").value;
    console.log(name);

    document.getElementById("child1").style.filter="blur(0px)"
     
    const tempObj={
        id : Date.now(),
        taskName:name
    }
    task.push(tempObj)
    console.log(task);

    addtaskonscreen()
    
}
function addtaskonscreen() {

    const element= document.createElement("div");
    element.setAttribute("class" , "abc");

    element.innerText=task[task.length-1].taskName;
    
    const existingelement=document.getElementById("child1");
    existingelement.appendChild(element);
    document.getElementById("xyz").style.filter="blur(0px)"

    // const elem= document.createElement("hr");
    // elem.setAttribute("id","icon");
    
    // const exist=document.getElementById("child1");
    // exist.appendChild(elem)
    const htmlData=`<div id="icon">
    <button id="delete" ><span class="material-icons">delete</span></button>
    <button id="add"><span class="material-icons">add_circle</span></button> <hr>`;

    element.insertAdjacentHTML('afterbegin',htmlData);
    console.log(element);
    $("button").click(function () {
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/todos",
            type:"GET",
            success:function (data) {
                console.log(data);
            }
        })
    })
    

    

    
    
}