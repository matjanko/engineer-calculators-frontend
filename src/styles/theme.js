import { createMuiTheme } from "@material-ui/core/styles";


export default createMuiTheme({

    overrides: {
       MuiAppBar: {
           colorPrimary: {
               backgroundColor: 'rgb(38, 46, 59)',
           }
       },
       MuiSelect: {
           select: {
               minWidth: '100px'
           }
       }
   } 
});