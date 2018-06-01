describe("App", () => {
  describe("Counter", () => {
      it("is set to 120 when the button is clicked", () => {
        let button = document.querySelector("#click-me");
        button.click();
        expect(document.querySelector("#counter").textContent).toBe('120');
      })
    }),

    describe("Button", () => {
      it("has an ID of 'click-me'", () => {
        let button = document.querySelector("button");
        expect(button.getAttribute('id')).toBe('click-me')
      })
    }),

    describe("Factorial", () => {
      it("returns the factorial of positive numbers", () => {
        expect(factorial(5)).toBe(120);
      })

      it("returns 1 if the provided number is less than 1 ", () => {
        expect(factorial(-5)).toBe(1);
      })
    }),


    describe("Computer", () => {
      it("is created with a hard drive size of 512", () => {
        let computer = new Computer();
        expect(computer.hardDriveSpace).toBe(512)
      })

      describe('Hard-disk-drive', () => {
        describe("installProgram", () => {
          let computer = new Computer();
          beforeEach(function (done) {
            computer.installProgram(500, function () {
              done()
            })
          })
          it("can install a program if there is sufficient space", (done) => {
            expect(computer.hardDriveSpace).toBe(12);
            done()
          })
        })

        describe("installProgram", () => {
          let computer = new Computer();
          beforeEach(function (done) {
            computer.installProgram(600, function () {
              done()
            })
          })
          it("is unable to install a program if there is insufficient space", (done) => {
            expect(computer.hardDriveSpace).toBe(512);
            done()
          })
        })
      })

      describe("format", () => {
        let computer = new Computer();
        beforeEach(function (done) {
          computer.installProgram(500, function () {
            done()
          })
        })
        it("resets the hard drive to 512, even after programs have been installed", (done) => {
          computer.format();
          expect(computer.hardDriveSpace).toBe(512);
          done()
        })
      })
    })
})