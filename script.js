let crt_btn=document.querySelector(".crt-btn");
let task_input=document.querySelector(".task-input");
let tasks=document.querySelector(".tasks");
let i=0;
let task_holder;
let all_task_holder;
let task_detail;
let footer=document.querySelector(".footer");
let icon=document.querySelector(".icon");
let width=screen.width;
console.log(width);
crt_btn.addEventListener("click",e=>{
  if(e.target.nextElementSibling.value=="") return;
 let typed=e.target.nextElementSibling.value;
  // e.target.classList.toggle("ticked");
  task_holder=document.createElement("div");
  task_holder.className="task-holder";
  let completed=document.createElement("div");
  completed.className="completed";
  task_detail=document.createElement("p");
  task_detail.className="task-detail";
  task_detail.innerText=typed;
  let cross= document.createElement("img");
   cross.setAttribute("src","./images/icon-cross.svg");
  cross.className="cross"
  task_holder.append(completed,task_detail,cross);
  tasks.append(task_holder);
  tasks.classList.add("tasks-onclick");
  task_holder.classList.add("border-bottom");
  i++;
  all_task_detail=document.querySelectorAll(".task-detail");
  // footer.style.cssText=`
  // height:calc(100% + 200px);
  // `;
});


tasks.addEventListener("click",e=>{
  if(e.target.classList.contains("completed"))
  {  e.target.nextElementSibling.classList.toggle("line-through");
  }
  if(e.target.classList.contains("cross")){
    e.target.parentElement.remove();
    all_task_detail=document.querySelectorAll(".task-detail");
    i--;
    if(i==0){
      tasks.classList.remove("tasks-onclick");
    }
  }
})
let status=document.querySelector(".status");
status.addEventListener("click",e=>{
  if(e.target.classList.contains("all")){
    for(let c=0;c<all_task_detail.length;c++)
      {
        if(all_task_detail[c].parentElement.classList.contains("task-holder"))
        {
          all_task_detail[c].parentElement.style.cssText=`
      display:block;
      `;
        }
      }
    e.target.classList.add("status-click");
  e.target.nextElementSibling.classList.remove("status-click");
    e.target.nextElementSibling.nextElementSibling.classList.remove("status-click");
  }
  if(e.target.classList.contains("active")){
    for(let c=0;c<all_task_detail.length;c++)
    {
      if(all_task_detail[c].classList.contains("line-through"))
      {
      all_task_detail[c].parentElement.style.cssText=`
      display:none;
      `;
      }
      else{
        all_task_detail[c].parentElement.style.cssText=`
      display:block;
      `;
      }
    }
    e.target.classList.add("status-click");
    e.target.nextElementSibling.classList.remove("status-click");
    e.target.previousElementSibling.classList.remove("status-click");
    console.log(all_task_detail.length);
    console.log(e.target.classList);
  }
  if(e.target.classList.contains("completed-task")){
    for(let c=0;c<all_task_detail.length;c++)
    {
      if(all_task_detail[c].classList.contains("line-through"))
      {
      all_task_detail[c].parentElement.style.cssText=`
      display:block;
      `;
      }
      else{
        all_task_detail[c].parentElement.style.cssText=`
      display:none;
      `;
      }
    }
    e.target.classList.add("status-click");
    e.target.previousElementSibling.classList.remove("status-click");
    e.target.previousElementSibling.previousElementSibling.classList.remove("status-click");
    console.log(all_task_detail.length);
  }
})

icon.addEventListener("click",e=>{
  if(width>700)
  {
    let main=document.querySelector(".main");
  main.classList.toggle('desktop-light');
  }
  if(width<700){
  let main=document.querySelector(".main");
  main.classList.toggle('desktop-dark');
}
  icon.classList.toggle("moon");
  let main=document.querySelector(".main");
  main.classList.toggle('light-bg');
  footer.classList.toggle('change-footer');
});