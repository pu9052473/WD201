// /*
//     My Todo-list

//     Overdue
//     [ ] Submit assignment 2022-07-21

//     Due Today
//     [x] Pay rent
//     [ ] Service vehicle

//     Due Later
//     [ ] File taxes 2022-07-23
//     [ ] Pay electric bill 2022-07-23
// */

// const todoList = () => {
//     all = []
//     const add = (todoItem) => {
//       all.push(todoItem)
//     }
//     const markAsComplete = (index) => {
//       all[index].completed = true
//     }

//     const overdue = () => {
//       // Write the date check condition here and return the array
//       // of overdue items accordingly.
//       return all.filter( item  => item.dueDate === yesterday ); // return yesterday's date
//     }

//     const dueToday = () => {
//       // Write the date check condition here and return the array
//       // of todo items that are due today accordingly.
//       return all.filter( item  => item.dueDate === today ); // return today's date
//     }

//     const dueLater = () => {
//       // Write the date check condition here and return the array
//       // of todo items that are due later accordingly.
//       return all.filter( item  => new Date( item.dueDate ) > new Date() ); // return date greater than today , mean tomorrow
//     }

//     const toDisplayableList = (list) => {
//       // Format the To-Do list here, and return the output string
//       // as per the format given above.
//       return list
//         .map((item) => {
//             const status = item.completed ? '[x]' : '[ ]';
//             const dueDate = item.dueDate === today ? "" : `${item.dueDate}`
//             return `${status} ${item.title} ${dueDate}`;
//         }).join('\n');
//     }

//     return {
//       all,
//       add,
//       markAsComplete,
//       overdue,
//       dueToday,
//       dueLater,
//       toDisplayableList
//     };
//   };

//   // ####################################### #
//   // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
//   // ####################################### #

//   const todos = todoList();

//   const formattedDate = d => {
//     return d.toISOString().split("T")[0]
//   }

//   var dateToday = new Date()
//   const today = formattedDate(dateToday)
//   const yesterday = formattedDate(
//     new Date(new Date().setDate(dateToday.getDate() - 1))
//   )
//   const tomorrow = formattedDate(
//     new Date(new Date().setDate(dateToday.getDate() + 1))
//   )

//   todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
//   todos.add({ title: 'Pay rent', dueDate: today, completed: true })
//   todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
//   todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
//   todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

//   console.log("My Todo-list\n")

//   console.log("Overdue");
//   var overdues = todos.overdue();                               // value of call the overdue , set into the overdues
//   var formattedOverdues = todos.toDisplayableList(overdues);    // call toDisplayableList(overdues) , set into formattedOverdues
//   console.log(formattedOverdues);                               // print the formattedOverdues
//   console.log("\n");

//   console.log("Due Today");
//   let itemsDueToday = todos.dueToday();                                    // value of call the dueToday , set into the itemDueToday
//   let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);     // call toDisplayableList(itemDueToday) , set into formattedItemsDueToday
//   console.log(formattedItemsDueToday);                                     // print the formattedItemsDueToday
//   console.log("\n");

//   console.log("Due Later");
//   let itemsDueLater = todos.dueLater();                                    // value of call the dueLater , set into the itemDueLater
//   let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);     // call toDisplayableList(itemDueLater) , set into formattedItemsDueLater
//   console.log(formattedItemsDueLater);                                     // print the formattedItemsDueLater
//   console.log("\n\n");

const todoList = () => {
  let dateToday = new Date();
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const tommorow = new Date(today);
  tommorow.setDate(today.getDate() + 1);
  const all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    return all.filter((item) => item.dueDate === yesterday);
    // of overdue items accordingly.
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    return all.filter((item) => item.dueDate === today);
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    return all.filter((item) => new Date(item.dueDate) > new Date());
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    return list
      .map((item) => {
        const status = item.completed ? "[x]" : "[ ]";
        const dueDate = item.dueDate === today ? "" : `${item.dueDate}`;
        return `${status} ${item.title} ${dueDate}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
