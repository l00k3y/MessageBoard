import React from 'react';
import { Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// import '../App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        paddingTop: '1px',
        paddingBottom: '5px',
    },
    listPadding: {
        display: 'block',
        width: '100%',
        paddingTop: '1px',
        paddingBottom: '1px',
    },
  }));


export default function Comment(props){
    const classes = useStyles();

    // const [open, setOpen] = React.useState(true); 

    // // const handleClick = () => {
    // //     setOpen(!open);
    // // };

    // function handleReplies() {
    //     if (props.data.replies.length > 0) {
    //         props.data.replies.map(comment => {
    //             console.log(comment.comment);
    //             return (
    //                 <ul>
    //                     <li>{comment.user.name}</li>
    //                     {comment.comment}
    //                 </ul>
    //             );
    //         })
    //     }
    // }

    // need to show comment & conditionally show replies

    return (
        <List dense className={classes.root}> 
            <ListItem className={classes.listPadding}>
                <ListItemText primary={props.name} secondary={props.comment} />
                <Divider />
                {props.data.replies.map(commentData => {
                    return (
                        <Comment key={commentData.id} name={commentData.user.name} comment={commentData.comment} data={commentData}/>
                    );
                })}
            </ListItem>
        </List>
    )
}