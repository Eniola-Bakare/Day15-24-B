import React from 'react';
import './App.css';
import CustomHookOne from './components/CustomHookOne';
import CustomHookTwo from './components/CustomHookTwo';
import UserNameCustomHook from './UserNameCustomHook';
// import ClassCounter from './components/ClassCounter';
// import FetchingDataApi from './components/FetchingDataApi';
// import HookCounter from './components/HookCounter';
// import HookCounterFOur from './components/HookCounterFOur';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCountInterval from './components/HookCountInterval';
// import HookEffectContainer from './components/HookEffectContainer';
// import HookuseEffect from './components/HookuseEffect';
// import UseContextA from './components/UseContextA';
// import UseReducer from './components/UseReducer';
// import UseReducerFetchApi from './components/UseReducerFetchApi';
// import UseReducerTwo from './components/USeReducerTwo';

 export const UserContext = React.createContext()
 export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFOur /> */}
      {/* <HookuseEffect /> */}
      {/* <HookEffectContainer />
      <HookCountInterval />
      <FetchingDataApi /> */}

      {/* 13/09/22 */}
      {/* <UserContext.Provider value ={ 'Eniola'}>
         <ChannelContext.Provider value={'Codevolution'}>
            <UseContextA  />
         </ChannelContext.Provider>
      </UserContext.Provider>

      <UseReducer />
      <UseReducerTwo />*/}
      {/* <UseReducerFetchApi />  */}
      <CustomHookTwo />
      <CustomHookOne />
      <UserNameCustomHook />
    </div>
  );
}

export default App;
