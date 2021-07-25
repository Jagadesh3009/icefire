async function getJSON() {
    try{
        let resp = await fetch("https://www.anapioficeandfire.com/api/books");
        let data = await resp.json();
        let nresp = await fetch("https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10");
        let data1 = await nresp.json();
        let presp = await fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10");
        let data2 = await presp.json();
        var table = document.createElement('table');
        table.className = "table table-striped table-dark";
        var thead = document.createElement('thead');
        var tr = document.createElement("tr");
        var th1 = createtrth("td","Name");
        var th2 = createtrth("td","ISBN");
        var th3 = createtrth("td","NumberOfPages");
        var th4 = createtrth("td","Authors");
        var th5 = createtrth("td","Publisher");
        var th6 = createtrth("td","Release Date");
        tr.append(th1,th2,th3,th4,th5,th6);
        thead.append(tr);


        var tbody = document.createElement('tbody');
        for(var i=0;i<10;i++)
        {
            var tr = document.createElement("tr");
            var td1 = createtrth("td",data[i].name);
            var td2 = createtrth("td",data[i].isbn);
            var td3 = createtrth("td",data[i].numberOfPages);
            var td4 = createtrth("td",data[i].authors);
            var td5 = createtrth("td",data[i].publisher);
            var td6 = createtrth("td",data[i].released);
            tr.append(td1,td2,td3,td4,td5,td6);   
            tbody.append(tr);
        }
        table.append(thead,tbody);

        var navg = document.createElement('nav');
        navg.setAttribute("aria-label", "Page navigation");
        var ul = document.createElement('ul');
        ul.className = "pagination";
        for(var j = 0; j<=6; j++)
        {
            var li = document.createElement('li');
            li.className = "page-item";
            var a = document.createElement('a');
            a.className = "page-link";
            a.setAttribute("href","#");
            if(j === 0)
            {
                a.innerHTML = "previous";
                a.setAttribute("href",data2);
            }
            else if(j === 6 )
            {
                a.innerHTML = "Next";
                a.setAttribute("href",data1);
            }
            else
            {
                a.innerHTML = j;
            }
            li.append(a);
            ul.append(li);
        }
        navg.append(ul);
        document.body.append(table,navg);


        function createtrth(element , value = " "){
            var td = document.createElement(element);
            td.innerHTML = value;
            return td;
        }      
    }catch (error){
        console.log(error);
    }
}
getJSON();