// Tylor Schuessele

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import * as math from 'mathjs';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component{
    
    
    constructor() {
        super()
        this.state = {
            
            displayTextOutput: "0",
            lastClicked: "0"
        }
    }
    
    onButtonPressed(textIn) {
        
        if(this.state.lastClicked === "="){
            
            if((textIn === "X") || (textIn === "/") || (textIn === "+") || (textIn === "-")){
                this.setState({
                    displayTextOutput: this.state.displayTextOutput + textIn,
                    lastClicked: "0"
                })   
            }
            
            else if (textIn === "="){
                // do nothing    
            }
            
            else if ((textIn === "C") || (textIn === "Back")){
                this.setState({
                    displayTextOutput: "0",
                    lastClicked: "0"
                })
            }
            
            else{
                this.setState({
                    displayTextOutput: textIn,
                    lastClicked: "0"
                })
            }
            
            
        }
        
        else if (this.state.displayTextOutput === ("Math Error")){
            this.setState({ displayTextOutput: "0"})
        }
        
        else if(this.state.displayTextOutput === "0"){
            if ((textIn === "C") || (textIn === "Back")){
                this.setState({ displayTextOutput: "0"})
            }
            else{
                this.setState({ displayTextOutput: textIn })
            }
            
        }
        
        else if(textIn === "="){
            try{
                textIn = String(math.eval(this.state.displayTextOutput))
                this.setState({
                    lastClicked: "=",
                    displayTextOutput: (textIn) 
                }) 
            }
            catch(err){
                this.setState({
                    displayTextOutput: ("Math Error") 
                })  
            }     
            
        }
        
        else if(textIn === "C"){
            this.setState({
                    displayTextOutput: "0"
            })
        }
        
        else if (textIn === "X"){
            this.setState({
                displayTextOutput: this.state.displayTextOutput + "*"
            })
        }
        
        else if (textIn === "Back"){
            this.setState({
                displayTextOutput: this.state.displayTextOutput.slice(0, -1)
            })
            
            if(this.state.displayTextOutput.length == 1){
                this.setState({
                    displayTextOutput: "0"
                })
            }     
        }
    
        else {
            
            this.setState({
                displayTextOutput: this.state.displayTextOutput + textIn
            })
        }
    
    }
    
    render() {
        return (
            <View style={styles.container}>
        
                <View style={styles.display}>
                
                <Text style={styles.displayText} > {this.state.displayTextOutput}</Text>
            
                </View>
            
                <View style={styles.inputArea}>
            
                    <View style={styles.row}>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("C")} title="C" />
                        </View>
            
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("%")} title="%" />
                        </View>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("/")} title="/" />
                        </View>
            
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("Back")} title="Back" />
                        </View>
                        
                    </View>
            
                    <View style={styles.row}>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("7")} title="7" />
                        </View>
            
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("8")} title="8" />
                        </View>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("9")} title="9" />
                        </View>
            
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("X")} title="X" />
                        </View>
                        
                    </View>
            
                    <View style={styles.row}>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("4")} title="4" />
                        </View>
            
                        <View style={styles.button}>
                            <Button  onPress={() => this.onButtonPressed("5")}title="5" />
                        </View>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("6")} title="6" />
                        </View>
            
                        <View style={styles.button}>
                            <Button  onPress={() => this.onButtonPressed("-")} title="-" />
                        </View>
                        
                    </View>
            
                    <View style={styles.row}>
                        
                        <View style={styles.button}>
                            <Button  onPress={() => this.onButtonPressed("1")} title="1" />
                        </View>
            
                        <View style={styles.button}>
                            <Button  onPress={() => this.onButtonPressed("2")}title="2" />
                        </View>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("3")} title="3" />
                        </View>
            
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("+")} title="+" />
                        </View>
                        
                    </View>
            
                    <View style={styles.row}>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("^")} title="^" />
                        </View>
            
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("0")} title="0" />
                        </View>
                        
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed(".")} title="." />
                        </View>
            
                        <View style={styles.button}>
                            <Button onPress={() => this.onButtonPressed("=")} title="=" />
                        </View>
                        
                    </View>           
            
                </View>
        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    display:{
        flex: 1,
        backgroundColor: '#f4f9ff',
        alignItems: 'flex-end',
        paddingRight: 20,
        justifyContent: 'center'
    },
    
    inputArea:{
        flex: 1,
        backgroundColor: '#f2fff3',
        alignItems: 'stretch'
    },
    
    row:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    
    button:{
        backgroundColor: 'white',
        flex:1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'center',
        margin: 2
    },
    
    displayText:{
        fontSize: 50,
        
    }
    
    
});
