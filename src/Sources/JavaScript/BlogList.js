document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('SearchBox');
    const filterBox = document.getElementById('FilterBox');
    const blog_info = document.querySelectorAll('.Recent-Blog, .Popular-Blog');


    function Search(blog_title) 
    {
        blog_info.forEach(item => {
            const title = item.querySelector('.blog-title').textContent.toLowerCase();
            if (title.includes(blog_title)) 
            {
                item.style.display = 'block';
            }
            else
            {
                item.style.display = 'none';
            }
        });
    }

    searchBox.addEventListener('input', function() {
        const blog_title = searchBox.value.toLowerCase();
        Search(blog_title);
    });

    function Filter(category) 
    {
        blog_info.forEach(item => {
             
            if (category === 'all' 
                ||
                 item.classList.contains(category.charAt(0).toUpperCase() + category.slice(1) + '-Blog')
                ) 
            {
                item.style.display = 'block';
            } 
            else 
            {
                item.style.display = 'none';
            }
        });
    }


    filterBox.addEventListener('change', function() {
        const Category = filterBox.value;
        Filter(Category);
    });

    Filter(filterBox.value);
});
