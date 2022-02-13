import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import LabelRoundedIcon from '@mui/icons-material/LabelRounded';

export default function Todo(props) {   
    return (
        <Grid item xs={12} md={6}>
            <List dense={false} style={{textAlign: 'center'}} >
                <ListItem
                    secondaryAction={
                        <IconButton onClick={() => props.deleteItem(props.id)} edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar>
                            <LabelRoundedIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={props.todo}
                    />
                </ListItem>
            </List>
        </Grid>
    )
}