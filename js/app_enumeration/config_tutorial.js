//general title text
let text_title_0 = "INSTRUCTIONS";
let pos_title_x = Pos.center_x;
let pos_title_y = Pos.center_y - Math.round(0.24*Pos.canvas_height);
let size_titletext = Math.round(0.12*Pos.canvas_height);
//let col_titletext = [170,170,60];
let col_titletext = 'white';

//general button
let size_next_w = Math.round(0.12*Pos.canvas_height); //in pixel
let size_next_h = Math.round(0.07*Pos.canvas_height); //in pixel
let x_next = Pos.center_x+Math.round(0.14*Pos.canvas_height)-(size_next_w/2); //in pixel
let y_next = Pos.canvas_height-Math.round(0.14*Pos.canvas_height)-(size_next_h/2); //in pixel
let size_next_text = Math.round(0.02*Pos.canvas_height);

let size_previous_w = Math.round(0.12*Pos.canvas_height); //in pixel
let size_previous_h = Math.round(0.07*Pos.canvas_height); //in pixel
let x_previous = Pos.center_x-Math.round(0.14*Pos.canvas_height)-(size_previous_w/2); //in pixel
let y_previous = Pos.canvas_height-Math.round(0.14*Pos.canvas_height)-(size_previous_h/2); //in pixel
let size_previous_text = Math.round(0.02*Pos.canvas_height); //in pixel

let text_font = 'Helvetica';

//scene 0 



let text_tutorial_0_0 = "هدف این آزمایش اندازه‌گیری توانایی شمارش شماست.";
let text_tutorial_0_1 = "در هر مرحله، یک فلاش کوتاه از چندین دایره سفید خواهید دید";
let text_tutorial_0_2 = "وظیفه شما این است که این دایره‌ها را بشمارید و پاسخ دهید که چند دایره"; 
let text_tutorial_0_3 = "با استفاده از نوار لغزنده نمایش داده شد";
let pos_tutorialtext_x = Pos.center_x;
let pos_tutorialtext_y = Pos.center_y+Math.round(0.04*Pos.canvas_height);
let size_tutorialtext = Math.round(0.025*Pos.canvas_height);
//let col_tutorialtext = [220,220,255];
let col_tutorialtext = 'white';
let shift_text = Math.round(0.04*Pos.canvas_height);

//scene 1
let flag_disp = false;
let num_demotargnum = 5;

let text_tutorial_1_0 = "لطفاً تعداد این دایره‌های سفید را به خاطر بسپارید.";
let pos_tutorialtext_x1 = Pos.center_x;
//let pos_tutorialtext_y1 = Pos.center_y-Math.round(5*ppd);
let pos_tutorialtext_y1 = Pos.center_y+Math.round(0.08*Pos.canvas_height);
let pos_tutorialimage_y1 = Pos.center_y - Math.round(0.16*Pos.canvas_height);
let pos_tutorialslider_y1 = Pos.center_y - Math.round(0.14*Pos.canvas_height);

//scene 2
let text_tutorial_2_0 = "لطفا با استفاده از نوار لغزنده پاسخ دهید که چند دایره نمایش داده شد.";
let pos_tutorialtext_x2 = Pos.center_x;
let pos_tutorialtext_y2 = Pos.center_y+Math.round(0.08*Pos.canvas_height);
// let pos_anszer_y2= Pos.center_y+(size_answer/2)
let pos_answer_y2= Pos.center_y - Math.round(0.24*Pos.canvas_height);
let shift_imageposition = Math.round(0.33*Pos.canvas_height);


//scene 3
let text_tutorial_3_0 = "بیاید تمرین را شروع کنیم.";
let size_tutorialtext3 = Math.round(0.04*Pos.canvas_height);
let pos_tutorialtext_x3 = Pos.center_x;
let pos_tutorialtext_y3 = Pos.center_y-Math.round(0.12*Pos.canvas_height);

let size_start_w = Math.round(0.12*Pos.canvas_height); //in pixel
let size_start_h = Math.round(0.07*Pos.canvas_height); //in pixel
let x_start = Pos.center_x- (size_start_w/2); //in pixel
let y_start = Pos.center_y-Math.round(0.10*Pos.canvas_height)+(size_start_h/2); //in pixel
let size_start_text = Math.round(0.02*Pos.canvas_height);

//scene main ready
let text_tutorial_4_0 = "بیاید آزمون اصلی را شروع کنیم.";
//scene break
let text_tutorial_5_0 = "زمان استراحت";

let size_bubble_x = Math.round(0.38*Pos.canvas_height);
let size_bubble_y = Math.round(0.08*Pos.canvas_height);
let pos_bubble_y = Pos.center_y + Math.round(0.119*Pos.canvas_height);
let pos_bubble_y2 = Pos.center_y + Math.round(0.143*Pos.canvas_height);

let pos_researcher_x = window_availw/3.3;
let pos_researcher_y = 4*window_availh/5;

let text_tutorial_6_1 = "از تلاش شما سپاسگزارم. وقتی آماده بودید،";
let text_tutorial_6_2 = " لطفاً برای شروع مجدد دکمه شروع را کلیک کنید.";