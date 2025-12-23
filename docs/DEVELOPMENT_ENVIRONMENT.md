# Cryptologicus — Development Environment

This document defines the **authoritative list of tools, dependencies, configuration, and constraints for the Cryptologicus development environment**. However, it should not be considered exhaustive as, if information on any required packages and other relevant items cannot be found here, it can and should be found in the relevant project files, e.g. `requirements.txt`. and by enumerating and inspecting the project or the Python virtual environment. If, from inspecting the environment, and reviewing the information in this document, any uncertainty exists regarding its contents or what is required for the development environment to function properly, please identify this as a WARNING and seek clarification from the project maintainers.

## 1. Python Virtual Environment

In order to function, Cryptologicus depends on many specific Python components to be installed and accessible. To ensure these tools are available and to maintain strict separation of this Python environment from any others, the project uses a Python Virtual Environment. **ALL** Python related work on Cryptologicus must therefore be performed within the **Python virtual environment** present in the project root directory at `venv/Python/`.

Therefore, before beginning any work on Cryptologicus, it is essential that the virtual Python Virtual Environment is activated by running the following command from the project root directory:

```zsh
source .venv/Python/bin/activate
```

As this is essential to the proper functioning of the project, any failure in activating or operating the virtual environment must be dealt with and resolved immediately and before continuing. If you are unable to resolve the issue you **MUST** stop work and contact the project maintainers immediately.

More items may be added to this list as the project evolves.