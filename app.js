function Contains(needle, haystack)
{
    for (var item in haystack)
    {
        if(haystack[item]==needle)
        {   
            return true;
        }
    }
    return false;
}

//DB
var courses = [
    {name:"ریاضی 1", pish:[], ham:[]},
    {name:"ریاضی 2", pish:["ریاضی 1"], ham:[]},
    {name:"فیزیک 1", pish:[], ham:[]},
    {name:"فیزیک 2", pish:["ریاضی 1"], ham:[]},
    {name:"آمار و احتمال مهندسی", pish:["ریاضی 2"], ham:[]},
    {name:"معادلات دیفرانسیل", pish:["ریاضی 1"], ham:[]},
    {name:"کارگاه کامپیوتر", pish:["مبانی کامپیوتر و برنامه سازی"], ham:[]},
    {name:"آزمایشگاه فیزیک 2", pish:["فیزیک 2"], ham:[]},
    
    {name:"مبانی کامپیوتر و برنامه سازی", pish:[], ham:[]},
    {name:"ریاضیات گسسته", pish:[], ham:[]},
    {name:"برنامه نویسی پیشرفته", pish:["مبانی کامپیوتر و برنامه سازی"], ham:[]},
    {name:"مدارهای منطقی", pish:["ریاضیات گسسته"], ham:[]},
    {name:"مدارهای الکتریکی", pish:["معادلات دیفرانسیل"], ham:[]},
    {name:"ساختمان های داده", pish:["برنامه نویسی پیشرفته","مبانی کامپیوتر و برنامه سازی"], ham:[]},
    {name:"نظریه زبان ها و ماشین ها", pish:["ساختمان های داده"], ham:[]},
    {name:"زبان تخصصی", pish:[], ham:[]},
    {name:"روش پژوهش و ارائه", pish:["زبان تخصصی"], ham:[]},
    {name:"ریاضیات مهندسی", pish:["ریاضی 2" , "معادلات دیفرانسیل"], ham:[]},
    {name:"معماری کامپیوتر", pish:["مدارهای منطقی"], ham:[]},
    {name:"سیستم عامل", pish:["ساختمان های داده","معماری کامپیوتر"], ham:[]},
    {name:"طراحی الگوریتم ها", pish:["ساختمان های داده"], ham:[]},
    {name:"طراحی کامپیوتری سیستم های دیجیتال", pish:["معماری کامپیوتر"], ham:[]},
    {name:"سیگنال ها و سیستم ها", pish:["ریاضیات مهندسی"], ham:[]},
    {name:"ریزپردازنده و زبان اسمبلی", pish:["معماری کامپیوتر"], ham:[]},
    {name:"هوش مصنوعی و سیستم های خبره", pish:["ساختمان های داده"], ham:[]},
    {name:"اصول طراحی کامپایلر", pish:["ساختمان های داده"], ham:[]},
    {name:"شبکه های کامپیوتری", pish:["ساختمان های داده"], ham:[]},
    {name:"آزمایشگاه ریزپردازنده", pish:["ریزپردازنده و زبان اسمبلی"], ham:[]},
//    {name:"آزمایشگاه سیستم های عامل", pish:[], ham:["سیستم های عامل"]},
//    {name:"آزمایشگاه شبکه های کامپیوتری", pish:[], ham:["شبکه های کامپیوتری"]},
    
    {name:"تحلیل و طراحی سیستم ها", pish:["برنامه نویسی پیشرفته"], ham:[]},
    {name:"پایگاه داده ها", pish:["ساختمان های داده"], ham:[]},
    {name:"طراحی زبان های برنامه سازی", pish:["اصول طراحی کامپایلر"], ham:[]},
    {name:"مهندسی نرم افزار", pish:["تحلیل و طراحی سیستم ها"], ham:[]},
    {name:"مهندسی اینترنت", pish:["شبکه های کامپیوتری"], ham:["پایگاه داده ها"]},
    
    {name:"مبانی هوش محاسباتی", pish:["برنامه سازی پیشرفته"], ham:[]},
    {name:"مبانی بینایی کامپیوتر", pish:["مبانی هوش محاسباتی"], ham:[]},
    {name:"مبانی پردازش زبان و گفتار", pish:["آمار و احتمال مهندسی","سیگنال ها و سیستم ها"], ham:[]},
    {name:"اصول رباتیکز", pish:["سیگنال ها و سیستم ها"], ham:[]}

    
]

// Dars Haye pas shode
var pass = []
// Dars Haye term Baad
var next = []

function togglePass(name)
{
    if(Contains(name, pass))
    {
        // pass.remove(name)
        var index = pass.indexOf(name);
        if (index > -1) 
        {
          pass.splice(index, 1);
        }
    }
    else
    {
        pass.push(name)
    }
}

//Fill Courses-box
function Init()
{
    for(var course of courses)
    {
        var newCourse = '<a href="#!" class="collection-item course-item">'+course.name+'</a>'
        $("#courses").html($("#courses").html() + newCourse)
    }
    fillNext()
}

//Fills 'next' Array
function Check()
{
    next = []
    for(var course in courses)
    {
        if ( !Contains(courses[course].name,pass) )
        {
            //Darsaei ke BarNadashte Hanooz
            var isOk = true;
            for( var pish of courses[course].pish)
            {
                if ( !Contains(pish,pass) )
                {
                    isOk = false;
                }
            }
            if(isOk)
            {
                next.push(courses[course].name)
            }
        }   
    }
}

//Fill next-term
function fillNext()
{
    Check()
    $("#next-term").html("")
    for(var course of next)
    {
        var newCourse = '<a href="#!" class="collection-item">'+course+'</a>'
        $("#next-term").html($("#next-term").html() + newCourse)
    }
}

// Main
Init()

$(".course-item").on('click',function(){
    $(this).toggleClass("active")
    togglePass($(this).text())
    fillNext()
})