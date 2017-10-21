// This is a file of data and helper functions that we can expose and use in our templating function

// Dump is a handy debugging function we can use to sort of "console.log" our data
export const dump = (obj) => JSON.stringify(obj, null, 2)

// inserting an SVG
export const icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`)

// Some details about the site
export const siteName = `Calendar microservice`
