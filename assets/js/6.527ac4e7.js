(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{344:function(e,n,o){},380:function(e){e.exports=JSON.parse('{"resumeJobs":[{"jobHeadline":"Vue.js Senior Frontend Developer","companyName":"@ jPower8","employmentPeriod":"2020 - současnost","jobDescription":"Programování informační firemní PWA aplikace pro jednu z největších českých finančních institucí. Kódování Vue.js komponent dle připravených podkladů, návrh aplikační logiky a refaktoring starých částí aplikace."},{"jobHeadline":"Vue.js Frontend Developer","companyName":"@ Košík.cz","employmentPeriod":"2019","jobDescription":"Refaktoring nepříliš povedených částí frontend části eshopu do nové podoby. Příprava modulů Vuex Store, práce s Google maps API. Spolupráce s MKT oddělením na nových částech aplikace."},{"jobHeadline":"Fullstack Frontend Developer","companyName":"@ Ušetřeno s.r.o.","employmentPeriod":"2019","jobDescription":"Programování nových částí webu Ušetřeno.cz. Příprava parametrizace kalkulaček energií, komunikačních služeb a finančích produktů v MySQL. Lehké programování backendových služeb REST API ve frameworku Symfony."},{"jobHeadline":"Frontend Coder","companyName":"@ Softec s.r.o","employmentPeriod":"2018","jobDescription":"Kódování šabon pro zaměstnaneckou nástavbu CRM systému Siebel s optimalizací pro IE 11. Konzultace grafických návrhů s designerem."},{"jobHeadline":"Frontend Developer","companyName":"@ Shoptet a.s.","employmentPeriod":"2018","jobDescription":"Kódování javascript logiky a HTML/CSS šablon pro systém eshopů Shoptet."},{"jobHeadline":"Frontend Developer","companyName":"@ Mall a.s.","employmentPeriod":"2016 - 2018","jobDescription":"Člen webového týmu Mall.cz, vývoj interních aplikací a webového frontendu využívající moderní frameworky (Vue.js a Angular), agilní metodika SCRUM, continuous integration (Gitlab, Bamboo), automatizace procesů, tvorba workshopů."},{"jobHeadline":"Frontend Coder, Frontend Developer","companyName":"@ Media Factory a.s.","employmentPeriod":"2015 - 2016","jobDescription":"Správa a údržba klientských webových stránek, tvorba nových webových prezentací (PHP, Less, Javascript / jQuery), spolupráce na webových reklamních kampaních. Reference: Vodafone.cz, DVBT2Overeno.cz, Česká pojišťovna, VW group."},{"jobHeadline":"Koordinátor projektů / E-Shop specialista","companyName":"@ Alza a.s.","employmentPeriod":"2011 - 2015","jobDescription":"Správa webového obsahu, koordinace týmu externistů, úprava textových i grafických prezentačních materiálů, startup a vedení týmu spravující rich content obsah, digitalizace audiovizuálního obsahu"}],"resumeEducation":[{"educationInstitution":"SOUO, Belgická 29, Praha 2","educationDescription":"Provoz obchodu, zakončeno maturitní zkouškou"},{"educationInstitution":"SOUO, Belgická 29, Praha 2","educationDescription":"Prodavač elektrotechnického spotřebního zboží, zakončeno výučním listem"}],"resumeAboutMe":{"headline":"O mně","text":"Webovému Frontendu se věnuji několik let, mám zkušenosti s agilním vývojem v metodice SCRUM a rád zkouším nové webové technologie. Sledování novinek na poli frontendu mi dělá radost stejně, jako elektronická hudba a kočky všeho druhu"},"resumeSkillsOverview":[{"name":"Web Frontend","percentage":"90","type":"circle"},{"name":"Web Backend","percentage":"45","type":"circle"}],"resumeSkills":[{"name":"HTML 5","percentage":90,"type":"line"},{"name":"CSS 3 / SCSS","percentage":80,"type":"line"},{"name":"JavaScript ES6","percentage":85,"type":"line"},{"name":"Vue.js","percentage":90,"type":"line"},{"name":"PHP","percentage":35,"type":"line"},{"name":"MYSQL","percentage":40,"type":"line"},{"name":"MongoDB","percentage":40,"type":"line"}],"resumeOtherSkills":[{"name":"Linux server","percentage":60,"type":"line"},{"name":"Webpack","percentage":60,"type":"line"},{"name":"Atlassian Suite","percentage":50,"type":"line"},{"name":"Adobe Photoshop","percentage":40,"type":"line"}]}')},381:function(e,n,o){"use strict";o(344)},390:function(e,n,o){"use strict";o.r(n);o(9);var t=o(380),a={name:"ResumeComponent",data:function(){return{resumeData:t,progressComponent:null}},mounted:function(){var e=this;o.e(22).then(o.t.bind(null,383,7)).then((function(n){e.progressComponent=n.default}))}},i=(o(381),o(43)),s=Object(i.a)(a,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"resume"},[o("client-only",[o("image-component",{attrs:{imageUrl:"https://drive.google.com/uc?export=download&id=1s4UFQotBl8tXuYQPbauWrIn-eR-nxyuw",backgroundImageUrl:"https://i.pinimg.com/originals/19/d2/94/19d294b86b157c57856ecd786461b8d2.jpg",imageHeight:"300",imageHeadline:"CV-hero-image"}})],1),e._v(" "),o("div",{staticClass:"row"},[o("h1",[e._v("Jan Novák")]),e._v(" "),o("h2",[e._v("Frontend developer")]),e._v(" "),o("div",{staticClass:"col-md-8"},[o("h3",{staticClass:"resume-headline"},[e._v("# Pracovní zkušenosti")]),e._v(" "),o("ul",{staticClass:"resume-list"},e._l(e.resumeData.resumeJobs,(function(n,t){return o("li",{key:"resume-list-item-"+t,staticClass:"resume-list-item"},[o("h4",{staticClass:"resume-headline"},[e._v(e._s(n.jobHeadline))]),e._v(" "),o("h4",{staticClass:"resume-info"},[o("span",{staticClass:"resume-info-company"},[e._v(e._s(n.companyName))]),e._v(" "),o("span",[e._v(e._s(n.employmentPeriod))])]),e._v(" "),o("p",[e._v(e._s(n.jobDescription))])])})),0),e._v(" "),o("h3",{staticClass:"resume-headline"},[e._v("# Vzdělání")]),e._v(" "),o("ul",{staticClass:"resume-list"},e._l(e.resumeData.resumeEducation,(function(n,t){return o("li",{key:"resume-education-item-"+t,staticClass:"resume-list-item"},[o("h4",{staticClass:"resume-headline"},[e._v(e._s(n.educationDescription))]),e._v(" "),o("p",[e._v(e._s(n.educationInstitution))])])})),0),e._v(" "),o("h3",{staticClass:"resume-headline"},[e._v("# O mně")]),e._v(" "),o("p",[e._v("Jsem rodinný typ, nejlépe se cítím se svojí rodinou na Praze 6. Mám rád teplé letní dny, pálivé jídlo a dobré pivo. Ve volném čase se věnuji psaní sci-fi příběhů a digitalizaci tabletop RPG her. Baví mě kvalitní literatura a filmy. Samozřejmě někdy mám i záchvaty, kdy si s radostí pustím i méně kvalitní; film a zpětně doceňuji jeho genialitu.")]),e._v(" "),o("p",[e._v("V minulosti jsem se intenzivně věnoval streamování audiovizuálního obsahu a obecně multimédiím na internetu. Rád se hrabu ve všemožných stylech elektronické hudby a tu nejlepší si přehrávám na audio kazety. Rád roztáčím vinyly a cédéčka jako DJ. Slyšet jste mě mohli ve většině známých klubů v Praze a nejen v ní.")]),e._v(" "),o("p",[e._v("Nemám rád sociální sítě, nekvalitní zvuk a naskakují mi pupínky ze špatného, odfláknutého kódu.")])]),e._v(" "),o("div",{staticClass:"col-md-4"},[o("h3",{staticClass:"resume-headline"},[e._v("# Dovednosti")]),e._v(" "),o("div",{staticClass:"row"},e._l(e.resumeData.resumeSkillsOverview,(function(n,t){return o("div",{key:"resume-skills-overview-"+t,staticClass:"col-sm-6"},[o("h4",[e._v(e._s(n.name))]),e._v(" "),o("ClientOnly",[o(e.progressComponent,{tag:"progress-component",staticClass:"vue-resume-circle-progress-bar",attrs:{percentage:n.percentage,type:n.type,"stroke-color":"#00f700"}})],1)],1)})),0),e._v(" "),o("h3",{staticClass:"resume-headline"},[e._v("# Hlavní technické dovednosti")]),e._v(" "),e._l(e.resumeData.resumeSkills,(function(n,t){return[o("div",{key:"resume-skills-"+t},[o("h4",[e._v(e._s(n.name))]),e._v(" "),o("ClientOnly",[o(e.progressComponent,{tag:"progress-component",attrs:{percentage:n.percentage,type:n.type,"stroke-color":"#00f700"}})],1)],1)]})),e._v(" "),o("h3",{staticClass:"resume-headline"},[e._v("# Ostatní technické dovednosti")]),e._v(" "),e._l(e.resumeData.resumeOtherSkills,(function(n,t){return[o("div",{key:"resume-other-skills-"+t},[o("h4",[e._v(e._s(n.name))]),e._v(" "),o("ClientOnly",[o(e.progressComponent,{tag:"progress-component",attrs:{percentage:n.percentage,type:n.type,"stroke-color":"#00f700"}})],1)],1)]}))],2)])],1)}),[],!1,null,null,null);n.default=s.exports}}]);