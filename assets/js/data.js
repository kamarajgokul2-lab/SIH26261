/* Synthetic demo data only. No access to actual AICTE records, identity systems or issuing authorities. */
(function(){
const KEY='thinksync01_v3';
const initial={version:3,user:{name:'Demo College Officer',role:'college-admin',portal:'college',institutionId:'IN-001'},
 institutions:[{id:'IN-001',name:'Southview Institute of Technology',state:'Tamil Nadu'},{id:'IN-002',name:'Central Technical College',state:'Karnataka'},{id:'IN-003',name:'Riverbend Engineering Institute',state:'Telangana'}],
 applications:[
 {id:'APP-2026-1001',institutionId:'IN-001',category:'Extension of Approval',year:'2026–27',submitted:'2026-10-24',status:'Correction Required',stage:'Document Verification',completed:3,total:8,fee:'Demo',assigned:'Verification Officer',documents:['DOC-01','DOC-02','DOC-03'],notes:'Survey number needs clarification.'},
 {id:'APP-2026-1002',institutionId:'IN-002',category:'Programme Change',year:'2026–27',submitted:'2026-10-25',status:'Under Scrutiny',stage:'Officer Review',completed:5,total:8,fee:'Demo',assigned:'Scrutiny Officer',documents:['DOC-04','DOC-05'],notes:'No unresolved checklist issue.'},
 {id:'APP-2026-1003',institutionId:'IN-001',category:'Extension of Approval',year:'2026–27',submitted:'2026-10-27',status:'Verification Pending',stage:'Source Verification',completed:4,total:8,fee:'Demo',assigned:'Verification Officer',documents:['DOC-06'],notes:'Official source is unavailable in demo.'},
 {id:'APP-2026-1004',institutionId:'IN-003',category:'New Course Intake',year:'2026–27',submitted:'2026-10-19',status:'Decision Pending',stage:'Competent Authority',completed:7,total:8,fee:'Demo',assigned:'Competent Authority',documents:['DOC-07','DOC-08'],notes:'Awaiting human statutory decision.'}
 ],
 documents:[
 {id:'DOC-01',applicationId:'APP-2026-1001',name:'Land record - scanned.pdf',category:'Land / Infrastructure',size:'1.2 MB',version:1,uploaded:'2026-10-24',status:'Review Required',sourceType:'Synthetic scanned record',fields:[['Institution name','Southview Institute of Technology'],['Survey number','154/2B'],['Reference survey number','154/2A'],['Document year','2025']]},
 {id:'DOC-02',applicationId:'APP-2026-1001',name:'Affidavit.pdf',category:'Affidavit',size:'620 KB',version:1,uploaded:'2026-10-24',status:'Check Passed',fields:[['Institution name','Southview Institute of Technology'],['Year','2026']]},
 {id:'DOC-03',applicationId:'APP-2026-1001',name:'Faculty list.pdf',category:'Faculty Record',size:'430 KB',version:1,uploaded:'2026-10-24',status:'Check Passed',fields:[['Faculty entries','24']]},
 {id:'DOC-04',applicationId:'APP-2026-1002',name:'Programme details.pdf',category:'Academic Record',size:'650 KB',version:1,uploaded:'2026-10-25',status:'Check Passed',fields:[['Programme','Computer Science']]},
 {id:'DOC-05',applicationId:'APP-2026-1002',name:'Permission record.pdf',category:'Permission',size:'270 KB',version:1,uploaded:'2026-10-25',status:'Check Passed',fields:[['Reference','PR-2373']]},
 {id:'DOC-06',applicationId:'APP-2026-1003',name:'Accreditation certificate.pdf',category:'Certification',size:'460 KB',version:1,uploaded:'2026-10-27',status:'Verification Pending',fields:[['Certificate number','ACC-9081'],['Issuer','Sample Authority']]},
 {id:'DOC-07',applicationId:'APP-2026-1004',name:'Building certificate.pdf',category:'Infrastructure',size:'490 KB',version:1,uploaded:'2026-10-19',status:'Check Passed',fields:[['Building','Block A']]},
 {id:'DOC-08',applicationId:'APP-2026-1004',name:'Academic data.pdf',category:'Academic Record',size:'360 KB',version:1,uploaded:'2026-10-19',status:'Check Passed',fields:[['Intake','60']]}
 ],
 flags:[
 {id:'FLAG-101',applicationId:'APP-2026-1001',documentId:'DOC-01',type:'Identifier mismatch',reason:'Uploaded survey identifier 154/2B differs from supporting test record 154/2A.',evidence:'Land record, page 1, survey-number field',rule:'DEMO-LAND-01 / v1.0',status:'Open',priority:'Review Required'},
 {id:'FLAG-102',applicationId:'APP-2026-1003',documentId:'DOC-06',type:'Source unavailable',reason:'No authorized issuing-authority connection has been configured for this demo.',evidence:'Certificate ID ACC-9081',rule:'DEMO-SOURCE-01 / v1.0',status:'Pending',priority:'Verification Pending'}
 ],
 corrections:[{id:'COR-01',applicationId:'APP-2026-1001',documentId:'DOC-01',message:'Please provide evidence clarifying the survey-number difference.',status:'Requested',created:'2026-10-28',reply:''}],
 verifications:[{applicationId:'APP-2026-1001',documentId:'DOC-01',method:'Manual source check',status:'Manual Review Required',source:'Not connected',timestamp:'2026-10-28'},{applicationId:'APP-2026-1003',documentId:'DOC-06',method:'Authorized-source adapter',status:'Source Unavailable',source:'Not connected',timestamp:'2026-10-28'}],
 rules:[{id:'DEMO-COMP-01',category:'Extension of Approval',name:'Required-document completeness',type:'Document checklist',version:'1.0',enabled:true},{id:'DEMO-DATE-01',category:'All categories',name:'Document-date consistency',type:'Date validation',version:'1.0',enabled:true},{id:'DEMO-LAND-01',category:'Extension of Approval',name:'Cross-document land identifier',type:'Consistency',version:'1.0',enabled:true},{id:'DEMO-SOURCE-01',category:'All categories',name:'Authorized issuer response',type:'Source verification',version:'1.0',enabled:true}],
 notifications:[
 {id:'N-01',institutionId:'IN-001',applicationId:'APP-2026-1001',message:'Additional evidence requested for survey-number discrepancy.',read:false,date:'2026-10-28'},
 {id:'N-02',institutionId:'IN-001',applicationId:'APP-2026-1003',message:'Source verification pending for accreditation certificate.',read:false,date:'2026-10-28'}
 ],
 audit:[{id:'AU-01',when:'2026-10-28 10:32',actor:'Verification Officer (demo)',action:'Correction requested',applicationId:'APP-2026-1001',detail:'Survey number mismatch; reason and evidence recorded.'},{id:'AU-02',when:'2026-10-27 15:18',actor:'System (demo)',action:'Preliminary check generated',applicationId:'APP-2026-1003',detail:'Source unavailable; manual verification required.'}],
 decisions:[]};
 function load(){try{const a=JSON.parse(localStorage.getItem(KEY));return a&&a.version===3?a:structuredClone(initial)}catch(e){return structuredClone(initial)}}
 function save(s){try{localStorage.setItem(KEY,JSON.stringify(s))}catch(e){console.warn('Storage unavailable; changes may not persist',e)}}
 window.DemoData={KEY,initial,load,save};
})();
