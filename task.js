var task = [{"name":"Clipster Training Server Invite",
                  "description": "Send a Customized message to someone you know who is successfull on social media",
                  "credits":"20"
},
 {"name":"Submit Clip For Campaign",
                  "description": "Submit post for active social media campaign, no followers required",
                  "credits":"40"
},
   {"name":"Share Game On Facebook",
                  "description": "Use the image and caption provided to share on the facebook group link",
                  "credits":"60"
}         
   ,
   {"name":"Share Game On Facebook Joker Slots",
                  "description": "Use the image and caption provided to share on the facebook group link",
                  "credits":"60"
}           
           ];

var task_step = [{"task_name":"Clipster Training Server Invite",
                 "step_name":"Copy Invite Message and send it to target audience",
                  "description": "Hi\n"+
                                  "We in the same page niche\n"+
                                  "We are looking for pages in your niche for an ongoing sponsored campaign. Let me know on my discord chat so that I can send you further details\n"+
                                  "(https://discord.gg/hpSBRwWMQ5)\n"+
                                  "Use paying audio on you next viral video (https://mngz47.itch.io/clipster-training)\n"+
                                  "#streamer #clips #kick #twitch #memes #whop #clipster #unickbot #virality"
},

                 {"task_name":"Submit Clip For Campaign",
                 "step_name":"Browse active campaigns",
                  "description": "see <a href=”https://clipster.onelink.me/2HTk/invite?deep_link_value=ref%3Dmngz44” >clipster campaigns</a>"},
{"task_name":"Submit Clip For Campaign",
                 "step_name":"Select correct campaign",
                  "description": "Check if the rules match your social media account - check if you will be able to get the required minimum views."}, 
{"task_name":"Submit Clip For Campaign",
                 "step_name":"Post the correct campaign content",
                  "description": "Check the asset folder for ready to post clips - also check the rules if you need to ad logo or text on screen onto clip. Use 'Instagram Edits' to make edits."},   
{"task_name":"Submit Clip For Campaign",
                 "step_name":"Submit Social media post link on clipster",
                  "description": "Locate the submit button under the campaign you have selected and input the link to your campaign video."},   

                 {"task_name":"Share Game On Facebook",
                 "step_name":"Download Post image",
                  "description": "<a href=https://mngz47.github.io/micro-task/karma_slots.png ><img src=https://mngz47.github.io/micro-task/karma_slots.png width=80px /></a>"},                   
{"task_name":"Share Game On Facebook",
                 "step_name":"Copy the caption",
                  "description": "Captivating virtual slot machine that combines the thrill of traditional slot gaming with modern digital innovation. Designed to provide an immersive and entertaining experience, Karma Slots boasts a visually stunning interface with vibrant colors, dynamic graphics, and smooth animations."},                     
{"task_name":"Share Game On Facebook",
                 "step_name":"Share on the provided group",
                  "description": "<a href=https://www.facebook.com/groups/GamerGuys.Girls/ >https://www.facebook.com/groups/GamerGuys.Girls/</a>"},                     

                  {"task_name":"Share Game On Facebook Joker Slots",
                 "step_name":"Download Post image",
                  "description": "<a href=https://mngz47.github.io/micro-task/joker_slots.png ><img src=https://mngz47.github.io/micro-task/karma_slots.png width=80px /></a>"},                   
{"task_name":"Share Game On Facebook Joker Slots",
                 "step_name":"Copy the caption",
                  "description": "Captivating virtual slot machine that combines the thrill of traditional slot gaming with modern digital innovation. Designed to provide an immersive and entertaining experience, Joker Slots boasts a visually stunning interface with vibrant colors, dynamic graphics, and smooth animations."},                     
{"task_name":"Share Game On Facebook Joker Slots",
                 "step_name":"Share on the provided group",
                  "description": "<a href=https://www.facebook.com/groups/GamerGuys.Girls/ >https://www.facebook.com/groups/GamerGuys.Girls/</a>"},    
                 
                 {"task_name":"*",
                 "step_name":"Send Proof",
                  "description": "Take screenshot of message and send it through 'submit proof'"                 
}];


function loadTask(){

var pick_task = Math.floor(Math.random() * task.length);
  
  e("micro_task_body").innerHTML += "<div style='background:black;color:white;' >"+
                                    "<h3><img src='https://mngz47.github.io/micro-task/wendy.PNG' width=70px />Hi Im Aveti <small>score free credits with micro task</small></h3>"+
                                    "<h4>"+task[pick_task]["name"]+" <small>credits("+task[pick_task]["credits"]+")</small></h4>"+
                                    "<p>"+task[pick_task]["description"]+" <a href=# onclick='toggle(e(\"task_steps\"));return false;' >Show Steps</a></p>"+  
                                   "<div id=task_steps ></div>"+
"</div>";

  current_task = task[pick_task]["name"];
   loadNextTaskStep();

}

function pickLoadTask(task_id){

var pick_task = task_id;
  
  e("micro_task_body").innerHTML += "<div style='background:black;color:white;' >"+
                                    "<h3><img src='https://mngz47.github.io/micro-task/wendy.PNG' width=70px />Hi Im Aveti <small>score free credits with micro task</small></h3>"+
                                    "<h4>"+task[pick_task]["name"]+" <small>credits("+task[pick_task]["credits"]+")</small></h4>"+
                                    "<p>"+task[pick_task]["description"]+" <a href=# onclick='toggle(e(\"task_steps\"));return false;' >Show Steps</a></p>"+  
                                   "<div id=task_steps ></div>"+
"</div>";

  current_task = task[pick_task]["name"];
   loadNextTaskStep();

}

var current_task = "";

var step_count = 0;

function loadNextTaskStep(){
var steps = "";
if (step_count<task_step.length){

  if(current_task == task_step[step_count]["task_name"] || "*" == task_step[step_count]["task_name"]){

   steps += "<p><strong> Step ("+ (step_count+1) +" of "+task_step.length+")</strong><h5>"+task_step[step_count]["step_name"]+"</h5>"+task_step[step_count]["description"]+"</p>"; 
    
  } 
    
  e('task_steps').innerHTML = steps+"<a href=# onclick='loadNextTaskStep();return false;' >Next Step</a>";
  step_count+=1;
}else{
   
  e('task_steps').innerHTML = steps+"<br><a href='https://docs.google.com/forms/d/e/1FAIpQLScsVQyZDhG1n3lh6bRfyqLKzsP3TA4taqt5iyWX9yp3N5rVhA/viewform?usp=publish-editor' >Submit Proof</a>";
   step_count = 0;
}
}

function loadTaskStep(task){
var steps = "";
  
for(var a=0;a<task_step.length;a++){

  if(task == task_step[a]["task_name"] || "*" == task_step[a]["task_name"]){

   steps += "<p><strong> Step ("+ (a+1) +")</strong><h5>"+task_step[a]["step_name"]+"</h5>"+task_step[a]["description"]+"</p>"; 
    
  } 
}
 e('task_steps').innerHTML = "<h4>"+task_step.length+" total steps</h4>"+steps+
      "<br><a href='https://docs.google.com/forms/d/e/1FAIpQLScsVQyZDhG1n3lh6bRfyqLKzsP3TA4taqt5iyWX9yp3N5rVhA/viewform?usp=publish-editor' >Submit Proof</a>";
}

  loadTask();
