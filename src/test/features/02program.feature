Feature: program Module
  
 #Scenario:Navigating to the program module
    #When Admin clicks the program menu from the header
   # Then Admin should land on the program page

#Scenario:Verify Logout displayed in menu bar
#Then Admin should see Logout in menu bar

#Scenario:Verify heading in menu bar
#Then Admin should see the heading "LMS - Learning Management System"

#Scenario:Verify other page's name displayed in menu bar
#Then Admin should see the page names as in order "ProgramBatchClassLogout"

#Scenario:Verify sub menu displayed in program menu bar
#Then Admin should see sub menu in menu bar as "Add New Program"

#Scenario:Admin should see the Title as "Manage Program"
#Then Admin should see the title "Manage Program"

#Scenario:Admin should see a Delete button in left top is disabled
#Then Admin should see a Delete button in left top is disabled

#Scenario:Verify the Search button 
#Then Admin should see Search bar with text as Search

#Scenario:Verify column header name of data table
#Then Admin should see data table with column header on the Manage Program Page as  "program name program description program status  edit / delete"
     
#Scenario:Verify checkbox default state beside Program Name column header
#Then Admin should see checkbox default state as unchecked beside Program Name column header 

#Scenario:Verify checkboxes default state beside each Program names in the data table 
#Then Admin should see check box default state as unchecked on the left side in all rows against program name 

#Scenario:Verify Sort icon in manage program
#Then Admin should see the sort arrow icon beside to each column header except Edit and Delete 

Scenario Outline:Verify edit and delete icon in manage program
Then Admin should see the "<Options>" in each rows
Examples: 
   |Options|
   |Edit_Icon|
    |Check_Box|
   | Delete_Icon |
