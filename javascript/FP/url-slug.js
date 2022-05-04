function urlSlug(title) {
  return title.toLowerCase().split(" ").filter(i => i != '').join("-");
}

// should return the string winter-is-coming
urlSlug("Winter Is Coming");

// should return the string winter-is-coming
urlSlug(" Winter Is  Coming");

// should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

// should return the string hold-the-door
urlSlug("Hold The Door");

