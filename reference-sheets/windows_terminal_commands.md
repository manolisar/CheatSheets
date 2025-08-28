# Windows Terminal Commands Reference (CMD & PowerShell)

## File and Directory Operations

### Navigation
```cmd
# Command Prompt (CMD)
cd                     # Show current directory
cd \path\to\directory  # Change directory
cd ..                  # Go up one directory
cd \                   # Go to root directory
dir                    # List files and directories
dir /a                 # Show all files including hidden
dir /s                 # Show files in subdirectories
tree                   # Display directory structure
tree /f                # Display directory structure with files
```

```powershell
# PowerShell
Get-Location           # Show current directory (pwd equivalent)
Set-Location C:\path   # Change directory (cd equivalent)
Set-Location ..        # Go up one directory
Set-Location ~         # Go to user profile directory
Get-ChildItem          # List files and directories (ls equivalent)
Get-ChildItem -Force   # Show hidden files too
Get-ChildItem -Recurse # Show files recursively
```

### File Operations
```cmd
# Command Prompt (CMD)
copy source destination    # Copy file
xcopy source dest /s /e   # Copy directory with subdirectories
robocopy source dest /s   # Robust copy (recommended for directories)
move oldname newname      # Move/rename file
ren oldname newname       # Rename file
del filename              # Delete file
del /s /q directory\*     # Delete all files in directory
rmdir directory           # Remove empty directory
rmdir /s /q directory     # Remove directory and contents
md dirname                # Create directory (mkdir)
type filename             # Display file content (cat equivalent)
```

```powershell
# PowerShell
Copy-Item source dest     # Copy file
Copy-Item -Recurse src dst # Copy directory recursively
Move-Item old new         # Move/rename file
Remove-Item filename      # Delete file
Remove-Item -Recurse dir  # Delete directory recursively
New-Item -ItemType Directory dirname  # Create directory
New-Item -ItemType File filename      # Create empty file
Get-Content filename      # Display file content
```

## Text Processing and Search

### Search Commands
```cmd
# Command Prompt (CMD)
find "text" filename      # Search for text in file
findstr "pattern" file    # Enhanced search with regex support
findstr /s /i "text" *    # Case-insensitive search in all files
where filename            # Find file in PATH
```

```powershell
# PowerShell
Select-String "pattern" filename    # Search for pattern in file
Select-String -Recurse "text" *.txt # Search in all txt files recursively
Get-ChildItem -Recurse -Name "*.log" # Find files by pattern
Where-Object {$_.Name -like "*.txt"} # Filter objects
```

### Text Manipulation
```cmd
# Command Prompt (CMD)
sort filename             # Sort lines in file
more filename             # Display file page by page
fc file1 file2           # Compare two files
comp file1 file2         # Compare files byte by byte
```

```powershell
# PowerShell
Get-Content file | Sort-Object    # Sort file content
Get-Content file | Select-Object -First 10  # First 10 lines (head)
Get-Content file | Select-Object -Last 10   # Last 10 lines (tail)
Compare-Object (Get-Content file1) (Get-Content file2)  # Compare files
Measure-Object -Line -Word -Character # Count lines, words, characters
```

## Process Management

### Viewing Processes
```cmd
# Command Prompt (CMD)
tasklist                  # Show running processes
tasklist /svc             # Show processes with services
tasklist /fi "imagename eq notepad.exe"  # Filter processes
```

```powershell
# PowerShell
Get-Process               # Show running processes
Get-Process | Where-Object {$_.CPU -gt 100}  # High CPU processes
Get-Process notepad       # Show specific process
Get-Service               # Show Windows services
Get-Service | Where-Object {$_.Status -eq "Running"}  # Running services
```

### Controlling Processes
```cmd
# Command Prompt (CMD)
taskkill /im notepad.exe  # Kill process by name
taskkill /pid 1234        # Kill process by ID
taskkill /f /im process   # Force kill process
start program             # Start program
start "" "C:\path\to\program.exe"  # Start program with full path
```

```powershell
# PowerShell
Stop-Process -Name notepad     # Kill process by name
Stop-Process -Id 1234          # Kill process by ID
Stop-Process -Force -Name app  # Force kill process
Start-Process program          # Start program
Start-Process -FilePath "C:\path\program.exe"  # Start with full path
```

## System Information

### System Status
```cmd
# Command Prompt (CMD)
systeminfo                # Detailed system information
hostname                  # Computer name
whoami                    # Current user
date                      # Current date
time                      # Current time
ver                       # Windows version
echo %USERNAME%           # Current username
echo %COMPUTERNAME%       # Computer name
```

```powershell
# PowerShell
Get-ComputerInfo          # Comprehensive system info
$env:USERNAME             # Current username
$env:COMPUTERNAME         # Computer name
Get-Date                  # Current date and time
[System.Environment]::OSVersion  # OS version
Get-Host                  # PowerShell host information
```

### Hardware and Performance
```cmd
# Command Prompt (CMD)
wmic cpu get name         # CPU information
wmic memorychip get capacity  # RAM information
wmic diskdrive get size   # Hard drive information
driverquery               # List installed drivers
```

```powershell
# PowerShell
Get-WmiObject -Class Win32_Processor     # CPU info
Get-WmiObject -Class Win32_PhysicalMemory # RAM info
Get-WmiObject -Class Win32_LogicalDisk   # Disk info
Get-PnpDevice             # Hardware devices
Get-Counter "\Processor(_Total)\% Processor Time"  # CPU usage
```

## Network Commands

### Network Information
```cmd
# Command Prompt (CMD)
ipconfig                  # IP configuration
ipconfig /all             # Detailed IP information
ipconfig /release         # Release IP address
ipconfig /renew           # Renew IP address
ipconfig /flushdns        # Clear DNS cache
ping hostname             # Test connectivity
tracert hostname          # Trace route to destination
nslookup hostname         # DNS lookup
netstat -an               # Show network connections
netstat -b                # Show programs using network
```

```powershell
# PowerShell
Get-NetIPConfiguration    # Network configuration
Get-NetAdapter            # Network adapters
Test-NetConnection hostname  # Test connectivity (enhanced ping)
Resolve-DnsName hostname  # DNS resolution
Get-NetTCPConnection      # TCP connections
Test-NetConnection -Port 80 hostname  # Test specific port
```

### File Sharing and Remote Access
```cmd
# Command Prompt (CMD)
net share                 # Show shared folders
net use                   # Show mapped drives
net use Z: \\server\share # Map network drive
net use Z: /delete        # Disconnect mapped drive
```

```powershell
# PowerShell
Get-SmbShare              # Show SMB shares
New-PSDrive -Name Z -PSProvider FileSystem -Root "\\server\share"  # Map drive
Get-PSDrive               # Show all drives
Enter-PSSession -ComputerName server  # Remote PowerShell session
```

## Windows Services and Registry

### Services Management
```cmd
# Command Prompt (CMD)
sc query                  # List services
sc start servicename      # Start service
sc stop servicename       # Stop service
sc config servicename start=auto  # Set service to automatic start
net start servicename     # Start service (alternative)
net stop servicename      # Stop service (alternative)
```

```powershell
# PowerShell
Get-Service               # List all services
Start-Service servicename # Start service
Stop-Service servicename  # Stop service
Restart-Service servicename  # Restart service
Set-Service -Name servicename -StartupType Automatic  # Set startup type
```

### Registry Operations
```cmd
# Command Prompt (CMD)
reg query HKLM\Software   # Query registry key
reg add HKLM\Software\Test # Add registry key
reg delete HKLM\Software\Test  # Delete registry key
regedit                   # Open Registry Editor
```

```powershell
# PowerShell
Get-ItemProperty "HKLM:\Software"  # Get registry values
Set-ItemProperty -Path "HKLM:\Software\Test" -Name "Value" -Value "Data"  # Set registry value
New-Item -Path "HKLM:\Software\Test"  # Create registry key
Remove-Item "HKLM:\Software\Test"     # Delete registry key
```

## Package Management

### Windows Package Manager (winget)
```cmd
# Available in newer Windows versions
winget search package     # Search for packages
winget install package    # Install package
winget upgrade           # List available upgrades
winget upgrade --all     # Upgrade all packages
winget list              # List installed packages
winget uninstall package # Uninstall package
```

### Chocolatey (Third-party package manager)
```cmd
# After installing Chocolatey
choco search package      # Search packages
choco install package     # Install package
choco upgrade all         # Update all packages
choco list --local-only   # List installed packages
choco uninstall package   # Uninstall package
```

## Environment Variables

### Environment Management
```cmd
# Command Prompt (CMD)
set                       # Show all environment variables
set PATH                  # Show PATH variable
set MYVAR=value           # Set environment variable (session only)
echo %PATH%               # Display PATH variable
setx MYVAR value          # Set persistent environment variable
```

```powershell
# PowerShell
Get-ChildItem Env:        # Show all environment variables
$env:PATH                 # Show PATH variable
$env:MYVAR = "value"      # Set environment variable (session)
[Environment]::SetEnvironmentVariable("MYVAR", "value", "User")  # Persistent
```

## File Permissions and Security

### Permissions
```cmd
# Command Prompt (CMD)
icacls filename           # Show file permissions
icacls filename /grant user:F  # Grant full control to user
icacls filename /remove user   # Remove user permissions
attrib +r filename        # Make file read-only
attrib -r filename        # Remove read-only attribute
attrib +h filename        # Hide file
```

```powershell
# PowerShell
Get-Acl filename          # Show file permissions
Set-Acl -Path filename -AclObject $acl  # Set permissions
Get-ItemProperty filename | Select-Object Attributes  # Show file attributes
Set-ItemProperty filename -Name Attributes -Value "ReadOnly"  # Set read-only
```

## Compression and Archives

### Built-in Compression
```cmd
# Command Prompt (CMD)
compact /c filename       # Compress file
compact /u filename       # Uncompress file
```

```powershell
# PowerShell
Compress-Archive -Path folder -DestinationPath archive.zip     # Create ZIP
Expand-Archive -Path archive.zip -DestinationPath destination  # Extract ZIP
```

## Useful Shortcuts and Tips

### Command Prompt Shortcuts
- `F1` - Repeat last command character by character
- `F3` - Repeat entire last command
- `F7` - Show command history
- `Tab` - Auto-complete file/folder names
- `Ctrl+C` - Cancel current command
- `Ctrl+Z` - End of file marker
- `↑/↓` - Navigate command history

### PowerShell Shortcuts
- `Tab` - Auto-complete cmdlets, parameters, and paths
- `Ctrl+R` - Search command history
- `Ctrl+C` - Cancel current command
- `Ctrl+L` - Clear screen
- `F7` - Show command history in popup
- `Ctrl+Space` - Show all possible completions

### Redirection and Pipes
```cmd
# Command Prompt (CMD)
command > file            # Redirect output to file (overwrite)
command >> file           # Redirect output to file (append)
command 2> file           # Redirect errors to file
command | more            # Pipe output to more command
command1 & command2       # Run commands sequentially
command1 && command2      # Run command2 only if command1 succeeds
command1 || command2      # Run command2 only if command1 fails
```

```powershell
# PowerShell
command | Out-File file   # Output to file
command | Add-Content file  # Append to file
command | Where-Object {condition}  # Filter output
command | Sort-Object     # Sort output
command | Select-Object -First 10   # Select first 10 items
command1; command2        # Run commands sequentially
```

### Aliases and Functions
```powershell
# PowerShell only
Get-Alias                 # Show all aliases
New-Alias -Name ll -Value Get-ChildItem  # Create alias
Set-Alias ll Get-ChildItem  # Set alias
function ll { Get-ChildItem -Force }  # Create function
```

This comprehensive reference covers both Command Prompt and PowerShell commands for Windows systems, including modern package management and advanced PowerShell features!