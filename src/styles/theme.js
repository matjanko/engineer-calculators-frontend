import { createMuiTheme } from "@material-ui/core/styles";


export default createMuiTheme({

    overrides: {
       MuiAppBar: {
           colorPrimary: {
               backgroundColor: 'rgb(38, 46, 59)',
           }
       },
       MuiSelect: {
           root: {
               fontSize: 14,
               backgroundColor: '#f5f5f5',
               paddingLeft: 10
           }
           ,
           select: {
               minWidth: '100px',
           },
       }
   } 
});