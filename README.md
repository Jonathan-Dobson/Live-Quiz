# Live-Quiz
an interactive, muti-device, trivia site where the trivia master can create and save, questions and the multiple choice answers, and host game events where the players each connect to the game via personal mobile phone.


# API reference

To get a list of all categories
    axios.get('localhost:99/category')

To change name of a category
    axios.put('localhost:99/category/OLDNAME',{category: NEWNAME})



