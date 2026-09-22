var task = [{"name":"Clipster Training Server Invite",
                  "description": "Send a Customized message to someone you know who is successfull on social media",
                  "credits":"20"
},
 {"name":"Submit Clip For Campaign",
                  "description": "Submit post for active social media campaign, no followers required",
                  "credits":"40"
}];

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
                 {"task_name":"*",
                 "step_name":"Send Proof",
                  "description": "Take screenshot of message and send it through 'submit proof'"                 
}];


function loadTask(){

var pick_task = Math.floor(Math.random() * task.length);
  
  e("micro_task_body").innerHTML += "<div><h4>"+task[pick_task]["name"]+"</h4>"+
                                    "<p>"+task[pick_task]["description"]+"</p>"+  
                                    loadTaskStep(task[pick_task]["name"])+
  "<a href='https://docs.google.com/forms/d/e/1FAIpQLScsVQyZDhG1n3lh6bRfyqLKzsP3TA4taqt5iyWX9yp3N5rVhA/viewform?usp=publish-editor' >Submit Proof</a>"+                                  
  "</div>";

}

function loadTaskStep(task){
var steps = "";
  
for(var a=0;a<task_step.length;a++){

  if(task == task_step[a]["task_name"] || "*" == task_step[a]["task_name"]){

   steps += "<p><h5>"+task_step[a]["step_name"]+"</h5>"+task_step[a]["description"]+"</p>"; 
    
  } 
}
  return steps;
}


