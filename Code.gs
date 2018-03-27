function elaborateIGCData() {
  //shared folder with IGC
  var folder = DriveApp.getFolderById('');
  //the folder where place the elaboration element
  var folderElaboration = DriveApp.getFolderById('');
  //it will contain the file id
  var csvId;
  
  var theFileName='';
  
  var file = DriveApp.getFilesByName(theFileName);
  
  while (file.hasNext()) {    
    
    csvId= file.next().getId()
    
  }
  if(csvId){    
    DriveApp.getFileById(csvId).makeCopy(folderElaboration).setName('');
    DriveApp.getFileById(csvId).setName('oldFile'); 
  }
  //after a while... invoke ETL jobs from Jenkins
  ETLCaller.runETLJob();
}
