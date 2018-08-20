import { createStore } from 'redux';
import configureStore from './store/configure.store';
import { addExpense, editExpense, removeExpense } from './actions/expenses.action';
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from './actions/filters.action';
import getVisibleExpense from './selectors/expenses.selector';

const store = configureStore();
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// EXPENSES
store.dispatch(addExpense({ description: 'Rent', amount: 4500, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Food', amount: 1000 }));

// const id = store.getState().expenses[1].id;
// store.dispatch(editExpense(id, { description: 'Family' }));

// store.dispatch(removeExpense(id));

// FILTERS
store.dispatch(setTextFilter('Food'));
store.dispatch(setStartDate(1000));

const state = store.getState();
console.log(getVisibleExpense(state.expenses, state.filters));