# Arduino IDE Cheatsheet

## Quick Reference
- **Version**: 2.x (Latest stable)
- **Platform**: Windows/macOS/Linux (Cross-platform)
- **License**: Open Source (GPL/LGPL)
- **Official Docs**: https://docs.arduino.cc/

## Essential Shortcuts

### File Operations
| Action | Shortcut | Description |
|--------|----------|-------------|
| New | Ctrl+N | Create new sketch |
| Open | Ctrl+O | Open existing sketch |
| Save | Ctrl+S | Save current sketch |
| Save As | Ctrl+Shift+S | Save with new name |
| Upload | Ctrl+U | Compile and upload to board |
| Verify | Ctrl+R | Compile without uploading |

### Edit Operations
| Action | Shortcut | Description |
|--------|----------|-------------|
| Cut | Ctrl+X | Cut selected text |
| Copy | Ctrl+C | Copy selected text |
| Paste | Ctrl+V | Paste from clipboard |
| Select All | Ctrl+A | Select all text |
| Find | Ctrl+F | Find text |
| Find Next | Ctrl+G | Find next occurrence |
| Replace | Ctrl+H | Find and replace |
| Comment/Uncomment | Ctrl+/ | Toggle line comments |
| Increase Indent | Ctrl+] | Indent selected lines |
| Decrease Indent | Ctrl+[ | Unindent selected lines |
| Auto Format | Ctrl+T | Format code automatically |

### View and Tools
| Action | Shortcut | Description |
|--------|----------|-------------|
| Serial Monitor | Ctrl+Shift+M | Open serial monitor |
| Serial Plotter | Ctrl+Shift+L | Open serial plotter |
| Preferences | Ctrl+, | Open preferences |
| Increase Font Size | Ctrl++ | Make text larger |
| Decrease Font Size | Ctrl+- | Make text smaller |

## Basic Arduino Programming

### Program Structure
```cpp
// Global variables and includes go here
#include <SoftwareSerial.h>

int ledPin = 13;
int buttonPin = 2;

void setup() {
  // Initialization code - runs once
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  // Main program - runs repeatedly
  if (digitalRead(buttonPin) == LOW) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(100);
}
```

### Data Types
```cpp
// Integer types
int myInt = 1000;           // 16-bit signed (-32,768 to 32,767)
unsigned int myUInt = 60000; // 16-bit unsigned (0 to 65,535)
long myLong = 90000;        // 32-bit signed
unsigned long myULong = 4000000000; // 32-bit unsigned
byte myByte = 255;          // 8-bit unsigned (0 to 255)

// Floating point
float myFloat = 3.14159;    // 32-bit floating point
double myDouble = 3.14159265; // Usually same as float on Arduino

// Boolean and character
bool myBool = true;         // true or false
char myChar = 'A';          // Single character
String myString = "Hello";  // String object

// Arrays
int myArray[5] = {1, 2, 3, 4, 5};
char charArray[6] = "Hello"; // Null-terminated string
```

### Pin Functions
```cpp
// Digital I/O
pinMode(pin, mode);         // Set pin mode: INPUT, OUTPUT, INPUT_PULLUP
digitalWrite(pin, value);   // Write HIGH or LOW
int value = digitalRead(pin); // Read HIGH or LOW

// Analog I/O
int value = analogRead(pin); // Read 0-1023 (0-5V on Uno)
analogWrite(pin, value);    // PWM output 0-255 (pins 3,5,6,9,10,11 on Uno)

// Advanced I/O
unsigned long duration = pulseIn(pin, value); // Measure pulse width
tone(pin, frequency);       // Generate square wave
tone(pin, frequency, duration); // Generate tone for duration
noTone(pin);               // Stop tone generation
```

## Common Functions

### Time Functions
```cpp
unsigned long millis();     // Milliseconds since startup
unsigned long micros();     // Microseconds since startup
delay(ms);                  // Pause for milliseconds
delayMicroseconds(us);      // Pause for microseconds

// Non-blocking timing example
unsigned long previousMillis = 0;
unsigned long interval = 1000; // 1 second

void loop() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    // Do something every second
  }
}
```

### Serial Communication
```cpp
// Setup
Serial.begin(9600);         // Initialize serial communication
Serial.begin(115200);       // Higher baud rate for faster communication

// Output
Serial.print("Hello");      // Print without newline
Serial.println("World");    // Print with newline
Serial.print(value, DEC);   // Print as decimal (default)
Serial.print(value, HEX);   // Print as hexadecimal
Serial.print(value, BIN);   // Print as binary
Serial.print(floatVal, 2);  // Print float with 2 decimal places

// Input
if (Serial.available()) {   // Check if data available
  int incomingByte = Serial.read(); // Read single byte
  String inputString = Serial.readString(); // Read entire string
  String line = Serial.readStringUntil('\n'); // Read until newline
}

// Useful for debugging
Serial.print("Variable = ");
Serial.println(myVariable);
```

### Math Functions
```cpp
// Basic math
int result = abs(x);        // Absolute value
int result = constrain(x, min, max); // Limit value to range
int result = map(value, fromLow, fromHigh, toLow, toHigh); // Scale value
int result = max(x, y);     // Maximum of two values
int result = min(x, y);     // Minimum of two values
int result = pow(base, exponent); // Power function
int result = sqrt(x);       // Square root

// Random numbers
randomSeed(analogRead(0));  // Seed random generator
long result = random(max);  // Random 0 to max-1
long result = random(min, max); // Random min to max-1

// Trigonometry (angles in radians)
float result = sin(angle);
float result = cos(angle);
float result = tan(angle);
```

## Digital I/O Examples

### Button Reading
```cpp
const int buttonPin = 2;
const int ledPin = 13;
int buttonState = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT_PULLUP); // Internal pullup resistor
}

void loop() {
  buttonState = digitalRead(buttonPin);
  
  if (buttonState == LOW) {  // Button pressed (pullup = LOW when pressed)
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
}
```

### Button Debouncing
```cpp
const int buttonPin = 2;
const int ledPin = 13;

int buttonState = HIGH;
int lastButtonState = HIGH;
unsigned long lastDebounceTime = 0;
unsigned long debounceDelay = 50;

void loop() {
  int reading = digitalRead(buttonPin);
  
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }
  
  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading != buttonState) {
      buttonState = reading;
      
      if (buttonState == LOW) {
        digitalWrite(ledPin, !digitalRead(ledPin)); // Toggle LED
      }
    }
  }
  
  lastButtonState = reading;
}
```

### LED Control with PWM
```cpp
const int ledPin = 9; // PWM pin

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // Fade in
  for (int brightness = 0; brightness <= 255; brightness++) {
    analogWrite(ledPin, brightness);
    delay(5);
  }
  
  // Fade out
  for (int brightness = 255; brightness >= 0; brightness--) {
    analogWrite(ledPin, brightness);
    delay(5);
  }
}
```

## Analog I/O Examples

### Reading Sensors
```cpp
const int sensorPin = A0;
const int ledPin = 9;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int sensorValue = analogRead(sensorPin);
  
  // Convert to voltage (0-5V)
  float voltage = sensorValue * (5.0 / 1023.0);
  
  // Map sensor value to LED brightness
  int brightness = map(sensorValue, 0, 1023, 0, 255);
  analogWrite(ledPin, brightness);
  
  Serial.print("Sensor: ");
  Serial.print(sensorValue);
  Serial.print(" Voltage: ");
  Serial.println(voltage);
  
  delay(100);
}
```

### Temperature Sensor (LM35)
```cpp
const int tempPin = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int reading = analogRead(tempPin);
  
  // Convert to voltage
  float voltage = reading * 5.0 / 1023.0;
  
  // Convert to temperature (LM35: 10mV/°C)
  float temperatureC = voltage * 100.0;
  float temperatureF = (temperatureC * 9.0 / 5.0) + 32.0;
  
  Serial.print("Temperature: ");
  Serial.print(temperatureC);
  Serial.print("°C (");
  Serial.print(temperatureF);
  Serial.println("°F)");
  
  delay(1000);
}
```

## Libraries and Advanced Features

### Including Libraries
```cpp
// Standard libraries
#include <SoftwareSerial.h>  // Additional serial ports
#include <Servo.h>           // Servo motor control
#include <LiquidCrystal.h>   // LCD display
#include <SPI.h>             // SPI communication
#include <Wire.h>            // I2C communication
#include <EEPROM.h>          // Internal EEPROM storage

// Installing libraries: Tools → Manage Libraries
// Or Sketch → Include Library → Library Manager
```

### Servo Control
```cpp
#include <Servo.h>

Servo myServo;
const int servoPin = 9;

void setup() {
  myServo.attach(servoPin);
}

void loop() {
  // Sweep servo from 0 to 180 degrees
  for (int angle = 0; angle <= 180; angle++) {
    myServo.write(angle);
    delay(15);
  }
  
  // Sweep back
  for (int angle = 180; angle >= 0; angle--) {
    myServo.write(angle);
    delay(15);
  }
}
```

### LCD Display
```cpp
#include <LiquidCrystal.h>

// LiquidCrystal(rs, enable, d4, d5, d6, d7)
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

void setup() {
  lcd.begin(16, 2); // 16 columns, 2 rows
  lcd.print("Hello, World!");
}

void loop() {
  lcd.setCursor(0, 1); // Column 0, Row 1
  lcd.print(millis() / 1000); // Display seconds
}
```

### I2C Communication
```cpp
#include <Wire.h>

void setup() {
  Wire.begin();        // Initialize I2C as master
  Serial.begin(9600);
}

void loop() {
  Wire.beginTransmission(8); // Device address
  Wire.write("Hello");       // Send data
  Wire.endTransmission();
  
  Wire.requestFrom(8, 6);    // Request 6 bytes from device 8
  while (Wire.available()) {
    char c = Wire.read();
    Serial.print(c);
  }
  
  delay(500);
}
```

## Board Configuration

### Board Selection
```
Tools → Board → Arduino Uno (or your board)

Common Boards:
- Arduino Uno (ATmega328P)
- Arduino Nano (ATmega328P, smaller)
- Arduino Mega (ATmega2560, more pins)
- Arduino Leonardo (ATmega32u4, USB native)
- ESP8266 (WiFi enabled)
- ESP32 (WiFi + Bluetooth)
```

### Port Selection
```
Tools → Port → COM3 (Windows) or /dev/ttyUSB0 (Linux)

Troubleshooting:
- Check USB cable connection
- Install CH340/FTDI drivers if needed
- Try different USB ports
- Check Device Manager (Windows)
```

### Board Manager
```
Tools → Board → Boards Manager

Install Additional Boards:
- ESP8266: Add URL in Preferences
- ESP32: Add URL in Preferences  
- STM32: Add URL in Preferences
- Adafruit boards: Add URL in Preferences
```

## Debugging Techniques

### Serial Monitor Debugging
```cpp
void setup() {
  Serial.begin(9600);
  Serial.println("Program started");
}

void loop() {
  int value = analogRead(A0);
  
  Serial.print("Debug: value = ");
  Serial.println(value);
  
  if (value > 500) {
    Serial.println("High value detected");
  }
  
  delay(1000);
}
```

### LED Indicator Debugging
```cpp
const int debugLED = 13;

void setup() {
  pinMode(debugLED, OUTPUT);
}

void debugBlink(int times) {
  for (int i = 0; i < times; i++) {
    digitalWrite(debugLED, HIGH);
    delay(200);
    digitalWrite(debugLED, LOW);
    delay(200);
  }
}

void loop() {
  // Your code here
  
  if (errorCondition) {
    debugBlink(3); // Blink 3 times for error
  }
}
```

### Watchdog Timer
```cpp
#include <avr/wdt.h>

void setup() {
  wdt_enable(WDTO_2S); // 2 second watchdog
  Serial.begin(9600);
}

void loop() {
  wdt_reset(); // Reset watchdog timer
  
  // Your main code here
  
  delay(100);
}
```

## Common Project Patterns

### State Machine
```cpp
enum State {
  IDLE,
  RUNNING,
  STOPPED,
  ERROR
};

State currentState = IDLE;

void loop() {
  switch (currentState) {
    case IDLE:
      // Idle state code
      if (startCondition) {
        currentState = RUNNING;
      }
      break;
      
    case RUNNING:
      // Running state code
      if (stopCondition) {
        currentState = STOPPED;
      }
      break;
      
    case STOPPED:
      // Stopped state code
      if (resetCondition) {
        currentState = IDLE;
      }
      break;
      
    case ERROR:
      // Error handling
      break;
  }
}
```

### Interrupt Handling
```cpp
volatile bool buttonPressed = false;
const int buttonPin = 2; // Must be pin 2 or 3 on Uno
const int ledPin = 13;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  attachInterrupt(digitalPinToInterrupt(buttonPin), buttonISR, FALLING);
}

void buttonISR() {
  buttonPressed = true; // Keep ISR short and simple
}

void loop() {
  if (buttonPressed) {
    digitalWrite(ledPin, !digitalRead(ledPin)); // Toggle LED
    buttonPressed = false;
    delay(200); // Simple debounce
  }
  
  // Other non-blocking code
}
```

## Tips & Best Practices

### Code Organization
- Use meaningful variable and function names
- Add comments to explain complex logic
- Group related functionality into functions
- Use constants instead of magic numbers
- Initialize variables at declaration

### Memory Management
- Use `const` for values that don't change
- Prefer `char arrays` over `String` for memory efficiency
- Use `F()` macro for string literals: `Serial.println(F("Hello"));`
- Monitor memory usage with: Sketch → Show Sketch Folder

### Performance Tips
- Avoid `delay()` in time-critical applications
- Use interrupts for responsive inputs
- Minimize floating-point calculations
- Use bit operations for efficiency
- Cache frequently used calculations

### Hardware Best Practices
- Use appropriate resistors for LEDs (220Ω typical)
- Add pullup/pulldown resistors for buttons
- Use decoupling capacitors for power supply
- Protect pins from over-voltage/current
- Plan power requirements for all components

## Troubleshooting

### Compilation Errors
| Error | Cause | Solution |
|-------|-------|----------|
| "not declared in this scope" | Variable not defined | Check spelling and scope |
| "expected ';' before" | Missing semicolon | Add semicolon to previous line |
| "no matching function" | Wrong function parameters | Check function signature |
| "does not name a type" | Missing include | Add required #include |

### Upload Issues
| Problem | Cause | Solution |
|---------|-------|----------|
| "port not found" | COM port issues | Check connections, drivers |
| "programmer not responding" | Board not responding | Press reset during upload |
| "out of sync" | Timing issues | Try different USB cable/port |
| "permission denied" | Port access | Close other serial programs |

### Runtime Issues
| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| Code doesn't run | Infinite loop in setup() | Check setup() function |
| Erratic behavior | Power supply issues | Check voltage/current |
| Random resets | Watchdog or power | Add delays, check power |
| Pins not working | Wrong pin numbers | Verify pin assignments |

## Resources
- [Arduino Reference](https://www.arduino.cc/reference/en/)
- [Arduino Project Hub](https://create.arduino.cc/projecthub)
- [Arduino Forum](https://forum.arduino.cc/)
- [Arduino Playground](https://playground.arduino.cc/)
- [Adafruit Tutorials](https://learn.adafruit.com/)
- [SparkFun Tutorials](https://learn.sparkfun.com/)