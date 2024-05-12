
function todolist(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
            if(this.readyState==4&&this.status==200){
            var response= JSON.parse(this.responseText);
            var output="";
              for(var i=0;i<response.length;i++){
                out=response[i].completed
                 if(out===false){
                    output+= `<tr><td>${response[i].title}</td><td><input type="checkbox"  id="chkk" onclick="ale()"></td></tr>  `;
            //         $("input").prop("checked",true)
                 }else{
                    output+= `<tr><td>${response[i].title}</td><td><input type="checkbox" checked id="chk" ></td></tr>`; 
                 }}
            document.getElementById("activities").innerHTML=output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }


 
        
function ale(){
var checkboxes=$("#chkk:checked").length
let p= new Promise(function(resolve,reject){
        if(checkboxes==5)
        resolve(checkboxes)
})
p.then(function(c){
    alert("Congrats. "+c+" Tasks have been successfully completed")
})           
}
window.onload = todolist;





