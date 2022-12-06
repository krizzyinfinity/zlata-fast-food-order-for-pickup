export default {
    name:"food",
    title:"Food",
    type:"document",
    fields:[
        {
            name: 'image',
            title: 'Image',
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
            
        },
        {
            name:"name",
            title:"Name",
            type:"string",
        },
        
        
        {
            name:"description",
            title:"Description",
            type:"string",
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{source:"name",
        maxLength:90,}
        },
        {
            name:"price",
            title:"Price",
            type:"number"
        },
        // {
        //     title: 'Extras',
        //     name: 'extras',
        //     type: 'array',
        //     of: [{type: 'string'}]
        //   }
        
    ]
}