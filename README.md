# vault-lend

This repository hosts both frontend and backend applications for Vault Lend.

A tool that allows users to enter their personal and loan-related details through a multi-step form. After form submission, the server will process this information and return loan offers from multiple lenders based on the submitted details.

### Please see individual repositories for detailed information.

# Running locally

`docker-compose up` Build and brings the two applications up talking to each other locally.
This setup is a bit buggy, as **fe** is running **npm** at **docker build** time, and **be** not.

If errors arise, please run the respective **fe** and **be** **build-and-run.sh** scripts, which will perform all required **npm** tasks before the **docker-build** and hopefully solve the problem.

### Requirements

- **node v23.1.0** (not sure if this is production stable, I just installed the higher version I saw)
- docker-compose
- docker

