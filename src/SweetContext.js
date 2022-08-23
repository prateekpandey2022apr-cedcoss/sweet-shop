import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useDebugValue,
} from "react";
import inventory, { users } from "./data";
import { useNavigate, useLocation } from "react-router-dom";

const SweetContext = createContext();

export function SweetProvider({ children }) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [session, setSession] = useState({});
  const [from, setFrom] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState(inventory);
  const [isSearchSubmit, setIsSearchSubmit] = useState(false);

  const navigate = useNavigate();
  let location = useLocation();

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    console.log(location);

    if (location.pathname === "/" && location.search === "") {
      setProducts(inventory);
      setIsSearchSubmit(false);
      setQuery("");
      setPriceSort("");
      setSelectedCategory("");
      // navigate("/");
    }
  }, [location]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function moveToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleLoginClick(event) {
    debugger;
    event.preventDefault();
    console.log("form");

    if (!user.username || !user.password) {
      alert("All fields are required");
      return;
    }

    const result = users.find(
      (u) => u.username === user.username && u.password === user.password
    );

    console.log(result);

    debugger;

    if (result) {
      setUser({});
      setLoggedIn(true);
      setSession({ ...result });

      if (from) {
        navigate(from);
        return;
      }
      navigate("/");
    } else {
      alert("Wrong username/password");
    }
  }

  function handleSearchClick(event) {
    console.log(event);
    setSearchVisible(!searchVisible);
  }

  function handleBackToTopClick() {
    moveToTop();
  }

  function makePayment(event) {
    event.preventDefault();
    setCart([]);
    navigate("/success");
    // return;
  }

  function handleAddCartBtn(event, productId) {
    console.log({ productId });

    const cartItem = cart.find((_item) => _item.id === productId);

    if (cartItem) {
      cartItem.quantity += 1;
      setCart([...cart]);
    } else {
      // console.log(inventory);
      const itenventoryItem = inventory.find((_item) => _item.id === productId);
      setCart([...cart, { ...itenventoryItem, quantity: 1 }]);
    }

    // moveToTop();
  }

  function handleQtyUpdate(event, productId, op) {
    console.log({ productId });

    const cartItem = cart.find((_item) => _item.id === productId);
    if (op === "+") {
      cartItem.quantity += 1;
      setCart([...cart]);
    } else {
      setCart(
        cart.filter((cartItem) => {
          if (cartItem.id == productId) {
            if (cartItem.quantity != 1) {
              cartItem.quantity -= 1;
              return cartItem;
            } else {
              return false;
            }
          }
          return cartItem;
        })
      );
    }
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log("@@");

    debugger;

    console.log(
      inventory.filter((item) => item.name.toLocaleLowerCase().includes(query))
    );

    let filteredItems = inventory.filter((item) =>
      item.name.toLocaleLowerCase().includes(query)
    );

    let _priceSort;
    let _cat;

    //

    if (
      event.target.nodeName == "SELECT" &&
      event.target.classList.contains("cat-filter")
    ) {
      _cat = event.target.value;

      if (_cat) {
        filteredItems = filteredItems.filter(
          (item) => item.category.toLowerCase() === _cat
        );
      }
    } else if (selectedCategory) {
      filteredItems = filteredItems.filter(
        (item) => item.category.toLowerCase() === selectedCategory
      );
    } else {
      filteredItems = inventory;
    }

    //

    if (
      event.target.nodeName == "SELECT" &&
      event.target.classList.contains("price-filter")
    ) {
      _priceSort = event.target.value;

      if (_priceSort === "ltoh") {
        filteredItems.sort((a, b) => a.price - b.price);
      } else if (_priceSort === "htol") {
        filteredItems.sort((a, b) => b.price - a.price);
      }
    } else {
      if (priceSort === "ltoh") {
        filteredItems.sort((a, b) => a.price - b.price);
      } else if (priceSort === "htol") {
        filteredItems.sort((a, b) => b.price - a.price);
      }
    }

    setProducts(filteredItems);

    setIsSearchSubmit(true);

    navigate(`/?query=${query}`);
  }

  function handleEmptyCartClick() {}

  function handleDeleteItemClick() {}

  function handleContinue() {}

  function handleLogoutClick(event) {
    console.log("logoput");
    setSession({});
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <SweetContext.Provider
      value={{
        cart,
        setCart,
        query,
        setQuery,
        searchVisible,
        scrollPosition,
        loggedIn,
        setLoggedIn,
        user,
        setUser,
        from,
        setFrom,
        products,
        setProducts,
        handleQtyUpdate,
        handleBackToTopClick,
        handleSearchClick,
        handleAddCartBtn,
        handleEmptyCartClick,
        handleDeleteItemClick,
        handleContinue,
        handleLoginClick,
        makePayment,
        handleLogoutClick,
        handleSearchSubmit,
        isSearchSubmit,
        priceSort,
        setPriceSort,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </SweetContext.Provider>
  );
}

export default SweetContext;
