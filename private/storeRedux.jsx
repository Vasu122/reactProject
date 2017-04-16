import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

var UPDATE_ACTIVITY_DATA="UPDATE_ACTIVITY_DATA";

var AboutUs=React.createClass({
render:function(){
return(
<div>hi i m rabindra kumar singh</div>
)
}
});


const productRemoved= (data)=>{
    return{
            type:'UPDATE_ACTIVITY_DATA',
            customerId:true
          }
  }


const mapStateToProps = (state,ownProps) => {
    return{
            OrderReviewData:state.OrderReviewData,
        
          }
        }

const mapDispatchToProps = (dispatch) => {
  return{
     productRemoved: () => {
      dispatch(productRemoved());
       }
  }
}

export const orderReviewReducer=(state = {OrderReviewData:'',customerId:false}, action)=> {
  switch (action.type) {
      case UPDATE_ACTIVITY_DATA:
      var newState = Object.assign({},state,{customerId:action.customerId});
           return newState;


        default:
          return state;
        }
};
export const CheckoutLogin = connect(mapStateToProps,mapDispatchToProps)(CheckoutOrderReview);



