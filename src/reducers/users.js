import { ADD_USER, DELETE_POST, EDIT_POST, ADD_POST } from "../store/actions";

const initialState = {
  users: [
    {
      userName: "valeriashust",
      password: "1234",
      posts: [
        {
          name: "Pasta",
          image:
            "https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/77460210.jpg?tr=w-430",
          content:
            "Lightly toast the almonds in a large frying pan on a medium heat, then tip into a pestle and mortar, leaving the pan on the heat. Peel the onion and garlic, finely chop with the anchovies and add to the pan with 2 tablespoons of olive oil. Fry for 4 minutes, stirring regularly.\n" +
            "\n" +
            "Meanwhile, cook the pasta in a pan of boiling salted water according to the packet instructions. Slice the courgettes ½cm thick, reserving the flowers, chop the tuna into rough 1cm dice, then stir both into the frying pan. Scrunch in the tomatoes through your clean hands, squeeze over the lemon juice and leave to tick away, stirring regularly. Finely grate the pecorino. Pound the almonds until fine.\n" +
            "\n" +
            "Once cooked, use tongs to drag the pasta straight into the frying pan, letting some starchy cooking water go with it. Toss together, then turn the heat off, tear in the courgette flowers and toss in the pecorino and most of the almonds. Check the seasoning, loosen with an extra splash of cooking water, if needed, and serve, sprinkled with the remaining almonds, finished with a drizzle of extra virgin olive oil."
        },
        {
          name: "Grilled squid salad",
          image:
            "https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/77460209.jpg?tr=w-430",
          content:
            "Soak the capers in a bowl of water. Squeeze all the lemon juice into a large shallow bowl and add 4 tablespoons of oil. Peel the garlic and finely chop with the chilli, anchovies, pistachios, drained capers and mint leaves. Scrape it all into the bowl and mix together well.\n" +
            "\n" +
            "Reserving the tentacles, run a sharp knife down the length of each squid tube, cutting through one side only so you can open each one out like a book. Lightly score the inside of each tube in a criss-cross fashion at ½cm intervals. To cook the squid, follow Franchina’s guidance and get the tentacles on early, then add the tubes, from largest to smallest. In a screaming hot griddle pan or on a barbecue, cook each piece for about 1 minute per side – with no oil or seasoning – until lightly charred and starting to curl. Start with the cut side when you do the tubes, and keep the squid moving for even cooking. As each piece is done, use tongs to dunk it straight into the salsa, turning and coating it in all that flavour.\n" +
            "\n" +
            "Slice the tomatoes and lay over a serving platter. Finely slice the squid tubes, pull the tentacles apart, then arrange on top of the tomatoes. Spoon over all the remaining salsa, and serve hot or at room temperature."
        },
        {
          name: "Lamb balti",
          image:
            "https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/58419466.jpg?tr=w-430",
          content:
            "Chop the lamb into rough 3cm chunks, then place in a bowl with the yoghurt, marinade spices and 1 teaspoon of salt, then mix well. Cover and leave to marinate in the fridge for at least 2 hours, but preferably overnight.\n" +
            "For the sauce, toast the coriander and cumin seeds in a dry pan over a medium heat for 1 minute, then tip into a pestle and mortar and bash to a fine powder.\n" +
            "Add the chilli, turmeric, garam masala, cardamom pods and bay, then mix together. Peel and finely grate the ginger, garlic and onions.\n" +
            "Drizzle 2 tablespoons of oil into a large frying pan over a medium heat, add the ginger and garlic, fry for 2 minutes, then add the onion and cook for a further 10 to 15 minutes, or until soft and golden.\n" +
            "Tip the tomatoes into the pan, breaking them up with your hands as you go, then stir in the spices and 500ml of boiling water. Simmer for 30 minutes, or until thickened and reduced, stirring occasionally.\n" +
            "Stir in the methi leaves, tamarind, honey and a pinch of sea salt, then remove from the heat.\n" +
            "Preheat the oven to 170ºC/325ºF/gas 3.\n" +
            "Drizzle 1 tablespoon of oil in a large frying pan over a medium heat, add the marinated lamb and fry for 5 minutes, or until browned all over – you may need to work in batches.\n" +
            "Add the lamb to the sauce, cover with a lid and place in the oven for 1 hour 30 minutes, or until the lamb is tender and the sauce is thickened, loosening with a splash of water, if needed.\n" +
            "Delicious served with fluffy rice, a scattering of coriander leaves and warm naan bread, if you like."
        },
        {
          name: "Creamed spinach",
          image:
            "https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/63841223.jpg?tr=w-430",
          content:
            "Preheat the oven to 180ºC/350ºF/gas 4.\n" +
            "Peel and finely chop the onions and garlic, then place in a large frying pan on a low heat with 2 tablespoons of oil and the oregano.\n" +
            "Finely grate in half the nutmeg and fry gently for 10 minutes, or until soft but not coloured, stirring regularly.\n" +
            "Add the spinach, turn the heat up to medium and cook down for 15 to 20 minutes, or until any liquid has evaporated.\n" +
            "Meanwhile, roughly chop the cold butter, grate the cheese and place in a food processor with the flour, oats and a pinch of sea salt and black pepper. Pulse into a nice crumble texture (or rub together by hand), then remove to a plate.\n" +
            "Put the cooked spinach mixture into the processor (there’s no need to clean it), then add the crème fraîche and blitz for 1 minute.\n" +
            "Taste and season to perfection, then tip evenly into a baking dish (20cm x 30cm). Sprinkle over the crumble and bake for around 45 minutes, or until golden and bubbling."
        },
        {
          name: "Roasted cauliflower & coconut soup",
          image:
            "https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/A65lKYyHKKSAVotTmdw9jg.jpg?tr=w-430",
          content:
            "Preheat your oven to 180°C/350ºF/gas 4.\n" +
            "Peel and cut the onions into 1cm wedges and trim then cut the cauliflower into even-sized florets. If it has the leaves on, don’t cut them off, roast those too.\n" +
            "Place it all in a roasting tray with the unpeeled garlic cloves and sprinkle with the cinnamon and ras el hanout. Season well, and drizzle everything with a good glug of olive oil.\n" +
            "Toss it all together and pop into the oven for 25 to 30 minutes, until cooked through and a little charred.\n" +
            "Scatter the coconut flakes on to a small tray and pop into the oven for the last few minutes to toast – they should only need 3 to 4 minutes.\n" +
            "When the veg are ready, remove the garlic cloves and scrape all the veg into a large saucepan. Squeeze the garlic out of its skins and add them too. Pour in the coconut milk, add the stock and gently bring to the boil.\n" +
            "Reduce the heat a little and simmer for 5 minutes, then remove from the heat. Using a stick blender, blitz the soup until creamy and smooth, adding a splash more water if it is too thick.\n" +
            "Taste and adjust the seasoning, and serve topped with the toasted coconut flakes and a drizzle of chilli oil."
        }
      ]
    },
    {
      userName: "monkey",
      password: "1234",
      posts: [
        {
          name: "Chilled pea & chervil soup with crème fraîche",
          image:
            "https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/46415313.jpg?tr=w-430",
          content:
            "Peel and roughly chop the shallots, then finely slice the bacon.\n" +
            "Place a large saucepan over a medium heat, add a drizzle of olive oil and fry the bacon for 4 minutes, or until golden and crispy.\n" +
            "Add the shallots and cook for 5 minutes, or until softened, then add the peas, stirring to coat everything in the bacon oil.\n" +
            "Pour in the stock, bring it to a simmer and let it bubble away for about 5 minutes.\n" +
            "Pick and add most of the chervil, then blitz with a stick blender until super-smooth. Season to taste and allow to cool.\n" +
            "Dividing between bowls, then serve with a dollop of crème fraîche, a drizzle of extra virgin olive oil (if using) and the remaining chervil scattered over."
        },
        {
          name: "Whitebait & dill mayo",
          image:
            "https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/CjEXdtRhqQ_8xfq2HfmMZO.jpg?tr=w-430",
          content:
            "Heat the oil in a deep fryer or pan to 200ºC.\n" +
            "Crush the fennel seeds in a pestle and mortar, then combine with the flour and season.\n" +
            "Working in batches, coat the fish in the flour mixture then very carefully fry for 3 minutes, or until golden and cooked. Remove with a slotted spoon and drain on kitchen paper.\n" +
            "Pick and finely chop the dill, then combine with the mayonnaise, and season.\n" +
            "Serve the fish with dill mayo and lemon wedges."
        },
        {
          name: "Chocolate brownie",
          image:
            "https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/80132203.jpg?tr=w-430",
          content:
            "Preheat the oven to 180ºC/350ºF/gas 4.\n" +
            "Tear off a large piece of greaseproof paper, scrunch it up under cold water, then unfold and use it to line a 20cm square baking tin.\n" +
            "Snap the chocolate into a heatproof bowl, dice the butter and add with a pinch of sea salt. Melt over a pan of gently simmering water, stirring regularly, then remove from the heat and leave to cool slightly.\n" +
            "Crack the eggs into a large bowl, then add the sugar and whisk until light, pale and fluffy.\n" +
            "Sieve in the flour, followed by the cocoa. Whisk to combine, then fold through the melted chocolate.\n" +
            "Spoon the mixture into the lined tin and spread it out evenly. Bake for 25 to 30 minutes, or until crisp on the outside but slightly wobbly.\n" +
            "Leave to cool in the tin for 15 minutes before slicing and serving warm – delicious with vanilla ice cream, crushed hazelnuts and caramel popcorn."
        },
      ]
    },
  ]
};

function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
    case DELETE_POST:
    case EDIT_POST:
      case ADD_POST:
      return {
        ...state,
        users: action.payload
      };

    default:
      return state;
  }
}

export default users;
