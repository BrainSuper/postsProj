import React from 'react';
import MyInput from "../../ui/MyInput/MyInput";
import MySelect from "../../ui/MySelect/MySelect";

const PostFilter = (props) => {
    return (
        <div>
            <MySelect {...props} style={{padding: "5px", fontSize: "15px", border: "2px solid teal",
                borderRadius: "5px"}} defaultValue='Sort' options={[
                {value: 'title', name: 'Sort by title'},
                {value: 'body', name: 'Sort by body'}
            ]}/>
            <MyInput style={{marginTop: "15px"}} onChange={(e) => {
                props.setFilters({...props.filters, query: e.target.value});
            }} value={props.filters.query} placeholder='Search...'/>
        </div>
    );
};

export default PostFilter;