import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { ShopContext } from '../pages/shop/shopContext';
import '../css/dropDownMenu.css'
import { useEffect, useRef, useState, useContext } from 'react';

const DropDownMenu = () => {
    const { cartItem } = useContext(ShopContext)
    const [open, setOpen] = useState(false)
    const menuRef = useRef()
    const cartItemCount = cartItem?.reduce((per, curr) => { return per + curr.count }, 0)
    
    useEffect(() => {
        const handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        
        return ()=>{document.removeEventListener('mousedown', handler)}
    },[])
    return (
        <>
            <div className='menu-container'  ref={menuRef}> 
                <div className='linebar-title'>
                    <div className='bars' onClick={()=>{setOpen(!open)}}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' ,color:'white'}}>
                        <span>Hossein Zarei</span>
                    </div>
                </div>
                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
                    <ul  onClick={()=>{setOpen(!open)}}>
                        <Link to='/'><DropDownItem icon={faShop} text=' Shop' /></Link>
                        <Link to='/cart'><DropDownItem icon={faShoppingCart} text=' Cart' />{cartItemCount >= 1 && <span className="cartItemCount">{cartItemCount}</span>} </Link>
                        <Link to='/about'><DropDownItem icon={faInfoCircle} text=' About' /></Link>
                        <Link to='/users'><DropDownItem icon={faUserGroup} text=' Users' /></Link>
                        <Link to='/login'><DropDownItem icon={faSignIn} text=' Login' /></Link>
                    </ul>
                </div>
            </div>
        </>
    );
    function DropDownItem(props) {
        return (
            <li className='item'>
                <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
                <span>{props.text}</span>
            </li>
        )
    }
}
 
export default DropDownMenu;


